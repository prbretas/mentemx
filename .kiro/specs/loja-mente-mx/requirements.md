# Requirements Document

## Introduction

Adição de uma seção de loja (vitrine de produtos) ao site Mente MX, posicionada após a seção do App MXPilot Pro e antes do FAQ. A loja exibirá produtos da marca Mente MX (camisas, bonés, bermudas, adesivos e outros itens), com botões de compra que redirecionam para a loja parceira Quebra Cava (link externo). Não haverá checkout próprio nesta fase. Imagens placeholder realistas serão usadas enquanto as fotos oficiais dos produtos não estiverem disponíveis. O visual deve seguir o padrão dark/laranja/verde já estabelecido no site.

## Glossary

- **Loja**: Seção de vitrine de produtos da marca Mente MX no site.
- **Produto**: Item físico da marca Mente MX disponível para compra (camisa, boné, bermuda, adesivo, etc.).
- **Card de Produto**: Componente visual que exibe imagem, nome, descrição e preço de um produto.
- **Quebra Cava**: Marca parceira responsável pela logística, estoque e envio dos produtos.
- **Placeholder**: Imagem temporária representativa do produto, usada até que fotos oficiais estejam disponíveis.
- **CTA**: Call-to-action — botão de ação que direciona o usuário para a compra.
- **Site Mente MX**: O site Mente MX em HTML/CSS/JS puro, hospedado em `prbretas.github.io/mentemx/`.
- **Navbar**: Barra de navegação fixa no topo do site.
- **Footer**: Rodapé do site.
- **Modal de Produto**: Janela sobreposta (popup) que exibe os detalhes ampliados de um produto sem trocar de página.

---

## Requirements

### Requirement 1: Seção de Loja no Site

**User Story:** Como visitante do site Mente MX, quero ver uma seção de loja com produtos da marca, para que eu possa conhecer e comprar itens oficiais Mente MX.

#### Acceptance Criteria

1. O Site Mente MX SHALL exibir uma seção com `id="loja"` posicionada no HTML após a seção `id="app"` e antes da seção `id="faq"`.
2. A Loja SHALL apresentar um cabeçalho com label de seção, título principal e subtítulo descritivo, seguindo o padrão visual das demais seções do site.
3. A Loja SHALL exibir no mínimo 5 (cinco) produtos distintos da marca Mente MX: camisa, boné, bermuda, adesivo e pelo menos um produto adicional.
4. WHEN a seção Loja é renderizada, O Site Mente MX SHALL exibir os produtos em um grid responsivo de cards.

---

### Requirement 2: Card de Produto

**User Story:** Como visitante, quero ver as informações de cada produto de forma clara e visual, para que eu possa decidir se tenho interesse em comprar.

#### Acceptance Criteria

1. O Card de Produto SHALL exibir uma imagem do produto (placeholder realista enquanto imagens oficiais não estiverem disponíveis).
2. O Card de Produto SHALL exibir o nome do produto em destaque.
3. O Card de Produto SHALL exibir uma breve descrição do produto.
4. O Card de Produto SHALL exibir o preço do produto formatado em reais (R$).
5. O Card de Produto SHALL exibir uma badge/etiqueta de categoria (ex: "Vestuário", "Acessório").
6. WHEN o usuário passa o cursor sobre o Card de Produto, O Card de Produto SHALL aplicar um efeito visual de destaque (elevação e borda colorida), consistente com o comportamento dos demais cards do site.

---

### Requirement 3: Redirecionamento para Quebra Cava

**User Story:** Como visitante interessado em comprar, quero clicar em um botão de compra e ser direcionado para a loja parceira, para que eu possa finalizar minha compra com segurança.

#### Acceptance Criteria

1. O Card de Produto SHALL conter um botão CTA com texto "Comprar" ou equivalente.
2. WHEN o usuário clica no botão CTA de um produto, O Site Mente MX SHALL abrir o link externo da Quebra Cava em uma nova aba do navegador (`target="_blank"`).
3. O Site Mente MX SHALL aplicar o atributo `rel="noopener noreferrer"` em todos os links externos para a Quebra Cava, por segurança.
4. WHERE o link da Quebra Cava para um produto específico não estiver disponível, O Site Mente MX SHALL redirecionar para a página principal da loja Quebra Cava como fallback.

---

### Requirement 4: Identidade Visual e Responsividade

**User Story:** Como visitante, quero que a seção de loja tenha a mesma identidade visual do restante do site, para que a experiência seja coesa e profissional.

#### Acceptance Criteria

1. A Loja SHALL utilizar exclusivamente as variáveis CSS já definidas no site: `--green: #2ecc40`, `--orange: #ff6b00`, `--black: #0a0a0a`, `--dark: #111`, `--gray: #1a1a1a`, `--light: #f5f5f5`.
2. A Loja SHALL utilizar as fontes já carregadas no site: `Bebas Neue` para títulos e `Inter` para textos.
3. WHEN a largura da tela é menor ou igual a 960px, A Loja SHALL reorganizar o grid de produtos para no máximo 2 colunas.
4. WHEN a largura da tela é menor ou igual a 560px, A Loja SHALL reorganizar o grid de produtos para 1 coluna.
5. A Loja SHALL utilizar fundo com cor `var(--dark)` para contrastar com a seção App (que usa gradiente escuro) e a seção FAQ (que usa `var(--black)`).

---

### Requirement 5: Navegação e Acessibilidade

**User Story:** Como visitante, quero poder navegar diretamente para a loja pelo menu do site, para que eu encontre os produtos facilmente.

#### Acceptance Criteria

1. A Navbar SHALL incluir um link "Loja" que ancora para `#loja`, posicionado entre os links "MXPilot Pro" e "FAQ" no menu desktop.
2. A Navbar SHALL incluir o link "Loja" também no menu mobile (`id="mobileMenu"`), na mesma posição relativa.
3. O Footer SHALL incluir um link "Loja" na coluna de navegação, entre os links "MXPilot Pro" e "FAQ".
4. A Loja SHALL utilizar atributos `alt` descritivos em todas as imagens de produto para acessibilidade.
5. A Loja SHALL garantir contraste de texto suficiente (mínimo 4.5:1) entre o texto dos cards e o fundo, seguindo o padrão já estabelecido no site.

---

### Requirement 6: Parceria com Quebra Cava

**User Story:** Como visitante, quero saber que os produtos são de uma parceria confiável, para que eu me sinta seguro ao ser redirecionado para outra loja.

#### Acceptance Criteria

1. A Loja SHALL exibir uma nota informativa indicando que os produtos são vendidos e entregues pela parceira Quebra Cava.
2. A Loja SHALL exibir o nome "Quebra Cava" como parceira logística de forma visível na seção.
3. WHEN o usuário clica no nome "Quebra Cava" na nota informativa, O Site Mente MX SHALL abrir o site da Quebra Cava em uma nova aba.

---

### Requirement 7: Imagens Placeholder

**User Story:** Como desenvolvedor, quero que a loja use imagens placeholder realistas enquanto as fotos oficiais não estão disponíveis, para que a vitrine tenha boa aparência desde o primeiro deploy.

#### Acceptance Criteria

1. A Loja SHALL utilizar imagens placeholder via serviço externo (ex: `placehold.co` ou `via.placeholder.com`) ou SVG inline para representar cada produto de forma realista.
2. O Placeholder SHALL ter dimensões adequadas para o card de produto (mínimo 300×300px).
3. O Placeholder SHALL ter fundo escuro e texto/ícone indicando o tipo de produto (ex: "CAMISA", "BONÉ"), compatível com o visual dark do site.
4. WHERE imagens oficiais forem fornecidas no futuro, O Site Mente MX SHALL permitir substituição simples das imagens placeholder sem necessidade de refatoração estrutural (uso de atributo `src` padrão em tag `<img>`).

---

### Requirement 8: Modal/Popup de Visualização do Produto

**User Story:** Como visitante, quero clicar em um card de produto e ver seus detalhes ampliados em um popup, para que eu possa avaliar o produto sem sair da página.

#### Acceptance Criteria

1. WHEN o usuário clica em um Card de Produto (ou em um botão "Ver Detalhes" dentro do card), O Site Mente MX SHALL abrir o Modal de Produto sobreposto à página atual, sem navegação para outra URL.
2. O Modal de Produto SHALL exibir a imagem do produto em tamanho ampliado (mínimo 400×400px em desktop).
3. O Modal de Produto SHALL exibir o nome completo do produto, a descrição completa, o preço formatado em reais (R$) e a badge de categoria do produto.
4. O Modal de Produto SHALL conter um botão "Comprar" que, WHEN clicado, abre o link da Quebra Cava em uma nova aba, com `rel="noopener noreferrer"`.
5. O Modal de Produto SHALL exibir um botão de fechar (ícone "×") posicionado no canto superior direito do modal.
6. WHEN o usuário clica no botão "×", O Modal de Produto SHALL fechar e retornar o foco para a página da loja.
7. WHEN o usuário clica fora da área do modal (no overlay de fundo), O Modal de Produto SHALL fechar.
8. WHEN o Modal de Produto está aberto, O Site Mente MX SHALL bloquear o scroll da página de fundo (`overflow: hidden` no `body`).
9. O Modal de Produto SHALL seguir a identidade visual do site: fundo `var(--gray)`, bordas `var(--orange)` ou `var(--green)`, tipografia `Bebas Neue` para título e `Inter` para textos.
10. WHEN a largura da tela é menor ou igual a 560px, O Modal de Produto SHALL ocupar a tela inteira (fullscreen) para melhor usabilidade em dispositivos móveis.
