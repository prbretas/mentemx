# Mente MX — Instruções de Contexto

## Sobre o Projeto
Site institucional da Mente MX — programa de treinamento mental para pilotos de motocross e esportes off-road.

## Stack
- HTML5 (página única — index.html)
- CSS3 customizado (styles/style.css)
- JavaScript vanilla (scripts/script.js)
- Firebase (opcional — analytics de cliques)
- Hospedado no GitHub Pages com domínio customizado (mentemx.com.br)

## Convenções
- Código em português (variáveis, comentários, textos)
- CSS usa custom properties (--green, --orange, --black, etc.)
- JavaScript sem frameworks — vanilla ES6+
- Fontes: Bebas Neue (títulos) + Inter (corpo)
- Tema escuro como padrão
- Mobile-first para novas implementações

## Estrutura
```
index.html          → Página principal (single page)
styles/style.css    → CSS principal customizado
scripts/script.js   → JS principal (carrossel, modais, Firebase)
css/                → CSS de terceiros (Bootstrap, animações)
img/                → Imagens do site e produtos
video/              → Vídeos do hero
fonts/              → Font Awesome + Glyphicons
```

## Regras
- Não commitar credenciais do Firebase (usar placeholders)
- Imagens de produtos não devem ser copiáveis (proteção via JS)
- Links de compra redirecionam para quebracava.com.br
- CTAs de mentoria redirecionam para WhatsApp (+55 47 99210-8650)
