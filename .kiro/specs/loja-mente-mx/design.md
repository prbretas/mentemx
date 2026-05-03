# Design Document — Loja Mente MX

## Overview

A seção de loja adiciona uma vitrine de produtos da marca Mente MX ao site existente, posicionada entre as seções `#app` e `#faq`. O objetivo é apresentar os produtos físicos da marca (camisas, bonés, bermudas, adesivos) e redirecionar o usuário para a loja parceira Quebra Cava para finalizar a compra. Não há checkout próprio nesta fase.

A implementação segue o padrão já estabelecido no site: HTML/CSS/JS puro, sem frameworks, visual dark com as variáveis CSS existentes (`--green`, `--orange`, `--black`, `--dark`, `--gray`), fontes Bebas Neue e Inter.

### Decisões de Design

- **SVG inline para placeholders**: Em vez de serviços externos (placehold.co), os placeholders serão SVGs inline embutidos diretamente no HTML. Isso elimina dependências de rede, garante carregamento instantâneo e mantém o visual dark consistente com o site. A substituição futura por imagens reais é trivial — basta trocar o conteúdo da tag `<img src="...">`.
- **Modal via JS puro**: O modal de detalhes do produto é controlado por funções JavaScript simples (`openModal` / `closeModal`), sem bibliotecas externas, seguindo o padrão já adotado no `scripts/script.js`.
- **Catálogo como array de objetos JS**: Os dados dos produtos são definidos como um array de objetos no `scripts/script.js`, facilitando manutenção e adição de novos produtos sem alterar o HTML.
- **Fallback único para Quebra Cava**: Como não há URLs individuais por produto na Quebra Cava nesta fase, todos os botões "Comprar" apontam para `https://www.quebracava.com.br` como fallback, conforme especificado nos requisitos.

---

## Architecture

O site é uma SPA estática (Single Page Application sem framework). A feature se integra ao padrão existente:

```
index.html          ← Estrutura HTML da seção #loja e do modal
styles/style.css    ← Estilos da seção, cards, modal e responsividade
scripts/script.js   ← Dados dos produtos (catálogo) e funções do modal
```

Não são criados novos arquivos. Toda a lógica é adicionada aos arquivos existentes, seguindo o padrão do projeto.

### Fluxo de Interação

```
Usuário visita #loja
       │
       ▼
Grid de cards renderizado (HTML estático)
       │
       ├─── Clica no card ──────────────► openModal(productId)
       │                                        │
       │                                        ▼
       │                               Modal exibido com dados do produto
       │                                        │
       │                               ┌────────┴────────┐
       │                               │                 │
       │                         Clica "×"        Clica no overlay
       │                               │                 │
       │                               └────────┬────────┘
       │                                        ▼
       │                                  closeModal()
       │
       └─── Clica "Comprar" ──────────► Abre quebracava.com.br em nova aba
```

---

## Components and Interfaces

### 1. Seção `#loja` (HTML)

Estrutura da seção inserida no `index.html` após `#app` e antes de `#faq`:

```html
<section id="loja">
  <!-- Cabeçalho da seção -->
  <div class="shop-header">
    <span class="section-label">Produtos Oficiais</span>
    <h2 class="section-title">LOJA <span>MENTE MX</span></h2>
    <div class="divider" style="margin: 14px auto"></div>
    <p class="section-sub">...</p>
  </div>

  <!-- Grid de produtos -->
  <div class="shop-grid">
    <div class="product-card" onclick="openModal('camisa')">
      <!-- imagem SVG inline, nome, descrição, preço, badge, botão -->
    </div>
    <!-- ... demais cards ... -->
  </div>

  <!-- Nota de parceria -->
  <div class="shop-partnership">
    <!-- Texto sobre Quebra Cava com link externo -->
  </div>
</section>

<!-- Modal de produto (fora da seção, no final do body) -->
<div class="modal-overlay" id="productModal" onclick="handleModalOverlayClick(event)">
  <div class="modal-content">
    <button class="modal-close" onclick="closeModal()">×</button>
    <!-- Conteúdo dinâmico preenchido por JS -->
  </div>
</div>
```

### 2. Card de Produto

Cada card exibe:
- Imagem placeholder SVG inline (fundo escuro, label do produto)
- Badge de categoria (ex: "Vestuário", "Acessório")
- Nome do produto (Bebas Neue)
- Descrição curta (Inter)
- Preço formatado (R$ XX,XX)
- Botão "Comprar" → abre Quebra Cava em nova aba

### 3. Modal de Produto

O modal é um overlay fullscreen com um painel centralizado. Exibe:
- Imagem ampliada do produto
- Nome completo (Bebas Neue, grande)
- Badge de categoria
- Descrição completa
- Preço formatado
- Botão "Comprar" (mesmo comportamento do card)
- Botão "×" para fechar

### 4. Funções JavaScript

```javascript
// Catálogo de produtos
const PRODUCTS = [
  {
    id: 'camisa',
    name: 'Camisa Mente MX',
    category: 'Vestuário',
    price: 89.90,
    description: '...',
    buyUrl: 'https://www.quebracava.com.br',
    svgLabel: 'CAMISA'
  },
  // ... demais produtos
];

// Abre o modal com os dados do produto
function openModal(productId) { ... }

// Fecha o modal
function closeModal() { ... }

// Trata clique no overlay (fecha se clicou fora do painel)
function handleModalOverlayClick(event) { ... }
```

### 5. Links de Navegação

Adicionados em três locais do HTML existente:

| Local | Posição | HTML |
|---|---|---|
| `.nav-links` (desktop) | Entre "MXPilot Pro" e "FAQ" | `<li><a href="#loja">Loja</a></li>` |
| `#mobileMenu` (mobile) | Entre "MXPilot Pro" e "FAQ" | `<a href="#loja" onclick="toggleMenu()">Loja</a>` |
| `.footer-col ul` (footer) | Entre "MXPilot Pro" e "FAQ" | `<li><a href="#loja">Loja</a></li>` |

---

## Data Models

### Produto

```javascript
{
  id: String,          // identificador único kebab-case (ex: 'camisa')
  name: String,        // nome completo do produto
  category: String,    // categoria: 'Vestuário' | 'Acessório'
  price: Number,       // preço em reais (ex: 89.90)
  description: String, // descrição curta para o card
  fullDescription: String, // descrição completa para o modal
  buyUrl: String,      // URL da Quebra Cava (fallback: 'https://www.quebracava.com.br')
  svgLabel: String     // label exibido no SVG placeholder (ex: 'CAMISA')
}
```

### Catálogo de Produtos

| id | name | category | price |
|---|---|---|---|
| `camisa` | Camisa Mente MX | Vestuário | R$ 89,90 |
| `bone` | Boné Mente MX | Acessório | R$ 59,90 |
| `bermuda` | Bermuda Mente MX | Vestuário | R$ 119,90 |
| `adesivo` | Adesivo Mente MX | Acessório | R$ 19,90 |
| `kit-adesivos` | Kit Adesivos Mente MX | Acessório | R$ 34,90 |

### Formatação de Preço

```javascript
// Converte número para string formatada em reais
// formatPrice(89.90) → "R$ 89,90"
function formatPrice(price) {
  return 'R$ ' + price.toFixed(2).replace('.', ',');
}
```

---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

A feature envolve lógica de dados (catálogo de produtos, formatação de preços, preenchimento do modal) que é adequada para property-based testing. As funções `formatPrice`, `openModal` e a estrutura dos cards são funções puras ou com comportamento verificável para qualquer produto do catálogo.

**Reflexão sobre redundância:**
- Os critérios 2.1, 2.2, 2.3, 2.4, 2.5 e 3.1 são todos regras que devem valer para qualquer produto no catálogo. Podem ser consolidados em uma única propriedade de "completude do card".
- Os critérios 8.1, 8.2, 8.3 e 8.4 são todos regras sobre o modal para qualquer produto. Podem ser consolidados em uma propriedade de "completude do modal".
- Os critérios 3.2, 3.3 e 3.4 sobre links externos podem ser consolidados em uma propriedade de "segurança dos links".
- O critério 2.4 sobre formatação de preço é independente e merece propriedade própria.
- O critério 5.4 sobre atributos alt é uma regra universal de acessibilidade.

### Property 1: Completude do card de produto

*Para qualquer* produto no catálogo (`PRODUCTS`), o card HTML gerado deve conter: uma imagem com atributo `alt` não-vazio, o nome do produto, uma descrição não-vazia, o preço formatado com "R$", uma badge de categoria não-vazia e um botão/link com texto "Comprar".

**Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 5.4**

### Property 2: Formatação de preço

*Para qualquer* valor numérico positivo representando um preço em reais, a função `formatPrice` deve retornar uma string que começa com "R$ " e contém o valor com duas casas decimais separadas por vírgula.

**Validates: Requirements 2.4**

### Property 3: Segurança e destino dos links externos

*Para qualquer* produto no catálogo, o botão "Comprar" (tanto no card quanto no modal) deve ter `target="_blank"`, `rel="noopener noreferrer"` e um `href` que começa com `https://www.quebracava.com.br`.

**Validates: Requirements 3.2, 3.3, 3.4**

### Property 4: Completude do modal de produto

*Para qualquer* produto no catálogo, após chamar `openModal(product.id)`, o modal deve exibir: a imagem do produto, o nome completo, a descrição completa, o preço formatado com "R$", a badge de categoria e um botão "Comprar" com link para a Quebra Cava.

**Validates: Requirements 8.1, 8.2, 8.3, 8.4**

---

## Error Handling

### Links externos
- Todos os links para `quebracava.com.br` usam `target="_blank"` e `rel="noopener noreferrer"` para prevenir ataques de reverse tabnapping.
- Se a URL específica de um produto não estiver disponível, o fallback é `https://www.quebracava.com.br` (página principal).

### Modal
- Se `openModal` for chamado com um `productId` inválido (não encontrado no catálogo), a função retorna sem abrir o modal, evitando exibição de conteúdo vazio.
- Ao fechar o modal, `body.style.overflow` é restaurado para `''` (valor padrão), garantindo que o scroll da página seja sempre restaurado mesmo em casos de fechamento inesperado.

### Imagens placeholder
- Os SVGs inline não dependem de rede, eliminando erros de carregamento de imagem.
- Quando imagens reais forem adicionadas, o atributo `alt` já estará definido, garantindo fallback de acessibilidade.

### Responsividade
- O grid usa `grid-template-columns` com media queries explícitas, sem depender de JavaScript para layout. Isso garante que o layout funcione mesmo com JS desabilitado.

---

## Testing Strategy

### Abordagem Dual

A feature combina testes de exemplo (para comportamentos específicos de UI e estrutura HTML) com testes de propriedade (para regras universais sobre o catálogo de produtos).

### Testes de Propriedade (Property-Based Testing)

**Biblioteca recomendada:** [fast-check](https://fast-check.dev/) para JavaScript.

Cada teste de propriedade deve rodar no mínimo **100 iterações**.

Os geradores de entrada para os testes de propriedade devem cobrir:
- Produtos com nomes de comprimento variado (curtos, longos, com caracteres especiais)
- Preços com variação (valores inteiros, decimais, valores extremos como R$ 0,01 e R$ 9.999,99)
- Categorias variadas

**Testes de propriedade a implementar:**

```
// Tag: Feature: loja-mente-mx, Property 1: Completude do card de produto
// Para qualquer produto do catálogo, o card deve conter todos os campos obrigatórios
test('card contém todos os campos para qualquer produto', ...)

// Tag: Feature: loja-mente-mx, Property 2: Formatação de preço
// Para qualquer preço positivo, formatPrice retorna string com "R$" e duas casas decimais
test('formatPrice formata corretamente qualquer preço positivo', ...)

// Tag: Feature: loja-mente-mx, Property 3: Segurança dos links externos
// Para qualquer produto, o link de compra tem target, rel e href corretos
test('links de compra têm atributos de segurança para qualquer produto', ...)

// Tag: Feature: loja-mente-mx, Property 4: Completude do modal
// Para qualquer produto, openModal exibe todos os campos do produto
test('modal exibe todos os campos para qualquer produto', ...)
```

### Testes de Exemplo (Unit Tests)

Focados em comportamentos específicos de UI e estrutura:

- **Estrutura HTML**: Verificar que `#loja` existe, está posicionado após `#app` e antes de `#faq`
- **Navegação**: Verificar links "Loja" na navbar desktop, mobile e footer
- **Responsividade**: Verificar que as media queries corretas existem no CSS (960px → 2 colunas, 560px → 1 coluna)
- **Modal — abrir/fechar**: Verificar que clicar no card abre o modal, clicar em "×" fecha, clicar no overlay fecha
- **Scroll bloqueado**: Verificar que `body.style.overflow = 'hidden'` ao abrir e restaurado ao fechar
- **Modal fullscreen mobile**: Verificar que a media query 560px aplica fullscreen ao modal
- **Parceria Quebra Cava**: Verificar que o texto de parceria está presente e o link abre em nova aba
- **Placeholders SVG**: Verificar que as imagens têm dimensões mínimas de 300×300px

### Testes de Integração / Smoke

- **Renderização completa**: Abrir o `index.html` em um browser e verificar que a seção `#loja` é exibida corretamente com todos os 5 produtos
- **Navegação âncora**: Clicar no link "Loja" na navbar e verificar que a página rola para `#loja`
- **Redirecionamento**: Clicar em "Comprar" e verificar que abre `quebracava.com.br` em nova aba

### Nota sobre PBT e UI

Os testes de propriedade se aplicam às funções JavaScript puras (`formatPrice`, `openModal` com dados mockados) e à estrutura de dados do catálogo. Comportamentos puramente visuais (hover effects, animações CSS, contraste de cores) são verificados por revisão manual e testes de exemplo, não por PBT.
