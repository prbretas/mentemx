# Implementation Plan: Loja Mente MX

## Overview

Adicionar uma seção de vitrine de produtos ao site Mente MX, com grid de cards, modal de detalhes e redirecionamento para a loja parceira Quebra Cava. A implementação é feita nos três arquivos existentes: `index.html`, `styles/style.css` e `scripts/script.js`.

## Tasks

- [x] 1. Adicionar dados e lógica JavaScript dos produtos
  - [x] 1.1 Definir array `PRODUCTS` com os 5 produtos no `scripts/script.js`
    - Cada objeto deve ter: `id`, `name`, `category`, `price`, `description`, `fullDescription`, `buyUrl`, `svgLabel`
    - _Requirements: 1.3, 2.1, 2.2, 2.3, 2.4, 2.5_
  - [x] 1.2 Implementar função `formatPrice(price)` no `scripts/script.js`
    - Converte número para string "R$ XX,XX" com vírgula decimal
    - _Requirements: 2.4_
  - [ ]* 1.3 Escrever property test para `formatPrice` (Property 2)
    - **Property 2: Formatação de preço**
    - **Validates: Requirements 2.4**
  - [x] 1.4 Implementar funções `openModal`, `closeModal` e `handleModalOverlayClick` no `scripts/script.js`
    - `openModal(productId)`: busca produto no array, preenche modal, adiciona classe `open`, seta `body.style.overflow = 'hidden'`
    - `closeModal()`: remove classe `open`, restaura `body.style.overflow = ''`
    - `handleModalOverlayClick(event)`: fecha se `event.target === event.currentTarget`
    - _Requirements: 8.1, 8.6, 8.7, 8.8_
  - [x] 1.5 Adicionar listener de teclado Escape para fechar modal no `scripts/script.js`
    - _Requirements: 8.6_
  - [ ]* 1.6 Escrever property test para completude do modal (Property 4)
    - **Property 4: Completude do modal de produto**
    - **Validates: Requirements 8.1, 8.2, 8.3, 8.4**

- [x] 2. Adicionar estilos CSS da seção loja e modal
  - [x] 2.1 Adicionar estilos da seção `#loja` e cabeçalho `.shop-header` no `styles/style.css`
    - `#loja`: `background: var(--dark)`, `padding: 90px 5%`
    - `.shop-header`: `text-align: center`, `margin-bottom: 50px`
    - _Requirements: 1.2, 4.1, 4.5_
  - [x] 2.2 Adicionar estilos do grid e cards de produto no `styles/style.css`
    - `.shop-grid`: grid 3 colunas, `gap: 24px`, `max-width: 1100px`, `margin: 0 auto`
    - `.product-card`: `background: var(--gray)`, `border-radius: 10px`, `border: 1px solid #2a2a2a`, `transition: .3s`, `cursor: pointer`, `overflow: hidden`
    - `.product-card:hover`: `translateY(-6px)`, `border-color: var(--orange)`
    - `.product-img`: container da imagem, `aspect-ratio: 1/1`, `overflow: hidden`
    - `.product-img svg`: `width: 100%`, `height: 100%`
    - `.product-info`: `padding: 18px 20px`
    - `.product-badge`: badge de categoria com `background: var(--green)`, estilo similar ao `.champ-badge`
    - `.product-name`: `font-family: 'Bebas Neue'`, `font-size: 1.55rem`
    - `.product-desc`: `color: #999`, `font-size: .83rem`
    - `.product-price`: `font-family: 'Bebas Neue'`, `color: var(--orange)`, `font-size: 2rem`
    - `.product-actions`: `display: flex`, `gap: 10px`, `margin-top: 14px`
    - `.btn-details`: botão outline laranja
    - `.btn-buy`: botão sólido verde
    - `.shop-partnership`: `text-align: center`, `margin-top: 36px`, `color: #777`
    - _Requirements: 2.5, 2.6, 4.1, 4.2_
  - [ ]* 2.3 Escrever property test para completude do card (Property 1)
    - **Property 1: Completude do card de produto**
    - **Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 5.4**
  - [x] 2.4 Adicionar estilos do modal no `styles/style.css`
    - `.modal-overlay`: `position: fixed`, `inset: 0`, `background: rgba(0,0,0,0.85)`, `z-index: 2000`, `display: none`, `align-items: center`, `justify-content: center`
    - `.modal-overlay.open`: `display: flex`
    - `.modal-content`: `background: var(--gray)`, `border-radius: 10px`, `border: 2px solid var(--orange)`, `max-width: 800px`, `width: 90%`, `max-height: 90vh`, `overflow-y: auto`, `position: relative`, `display: grid`, `grid-template-columns: 1fr 1fr`
    - `.modal-close`: `position: absolute`, `top: 14px`, `right: 18px`, `background: none`, `border: none`, `color: #fff`, `font-size: 2rem`, `cursor: pointer`
    - `.modal-img`: imagem ampliada, `width: 100%`, `height: 100%`, `object-fit: cover`
    - `.modal-info`: `padding: 34px 28px`
    - `.modal-name`: `font-family: 'Bebas Neue'`, `font-size: 2.5rem`
    - `.modal-price`: `font-family: 'Bebas Neue'`, `color: var(--orange)`, `font-size: 3rem`
    - `.modal-desc`: `color: #bbb`, `font-size: .9rem`, `line-height: 1.75`
    - `.modal-buy`: botão comprar no modal, estilo `.btn-serv`
    - _Requirements: 8.2, 8.3, 8.5, 8.9_
  - [x] 2.5 Adicionar media queries responsivas no `styles/style.css`
    - `≤960px`: `.shop-grid` 2 colunas, `.modal-content` 1 coluna
    - `≤560px`: `.shop-grid` 1 coluna, `.modal-content` fullscreen (width/height 100%, border-radius 0)
    - _Requirements: 4.3, 4.4, 8.10_
  - [ ]* 2.6 Escrever property test para segurança dos links (Property 3)
    - **Property 3: Segurança e destino dos links externos**
    - **Validates: Requirements 3.2, 3.3, 3.4**

- [x] 3. Checkpoint — Verificar JS e CSS
  - Garantir que as funções JS estão corretas e os estilos CSS compilam sem erros. Perguntar ao usuário se houver dúvidas.

- [x] 4. Adicionar estrutura HTML da seção loja e modal
  - [x] 4.1 Adicionar links "Loja" na navbar desktop, menu mobile e footer no `index.html`
    - Navbar desktop: `<li><a href="#loja">Loja</a></li>` entre "MXPilot Pro" e "FAQ"
    - Menu mobile: `<a href="#loja" onclick="toggleMenu()">Loja</a>` entre "MXPilot Pro" e "FAQ"
    - Footer: `<li><a href="#loja">Loja</a></li>` entre "MXPilot Pro" e "FAQ"
    - _Requirements: 5.1, 5.2, 5.3_
  - [x] 4.2 Adicionar seção `#loja` no `index.html` após `#app` e antes de `#faq`
    - Cabeçalho com `section-label`, `section-title`, `divider`, `section-sub`
    - Grid `.shop-grid` com 5 cards de produto, cada um com SVG placeholder inline, badge, nome, descrição, preço, botão "Ver Detalhes" e botão "Comprar"
    - Nota de parceria `.shop-partnership` com link para quebracava.com.br
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 3.4, 5.4, 6.1, 6.2, 6.3, 7.1, 7.2, 7.3_
  - [x] 4.3 Adicionar modal `#productModal` no `index.html` antes do WA FLOAT
    - Estrutura: `.modal-overlay` > `.modal-content` > `.modal-close` + `.modal-img` + `.modal-info`
    - `.modal-info` contém: `.modal-badge`, `.modal-name`, `.modal-price`, `.modal-desc`, `.modal-buy`
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.9_

- [x] 5. Checkpoint final — Garantir que tudo está integrado
  - Verificar que a seção `#loja` aparece entre `#app` e `#faq`, que os links de navegação funcionam, que o modal abre e fecha corretamente, e que os botões "Comprar" abrem quebracava.com.br em nova aba. Perguntar ao usuário se houver dúvidas.

## Notes

- Tasks marcadas com `*` são opcionais e podem ser puladas para MVP mais rápido
- Cada task referencia requisitos específicos para rastreabilidade
- Os SVGs inline eliminam dependência de rede para os placeholders
- Checkpoints garantem validação incremental
- Property tests validam propriedades universais de corretude
- Unit tests validam exemplos específicos e casos de borda
