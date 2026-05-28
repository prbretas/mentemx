# 🚀 MELHORIAS — Roadmap de Evolução do Site Mente MX

> Documento de melhorias aprovadas para o site mentemx.com.br  
> Cada item tem uma issue correspondente no [Kanban](https://github.com/users/prbretas/projects/6)

---

## 🔴 Prioridade Alta — Impacto Direto na Conversão

### 1. Formulário de Contato com Persistência de Leads
**Status:** ✅ Aprovado  
**Tipo:** Backend / Integração

**Problema:** O formulário apenas redireciona para WhatsApp. Se o usuário não completar a ação, o lead é perdido.

**Solução:**
- Integrar com Google Sheets via Apps Script (gratuito, sem servidor)
- Salvar nome, email, modalidade e mensagem automaticamente
- Manter redirecionamento para WhatsApp como ação complementar
- Exibir confirmação visual ao usuário independente do WhatsApp

**Impacto:** Captura de leads mesmo quando o usuário não abre o WhatsApp.

---

### 2. Ocultar Loja do Menu (Manter Código)
**Status:** ✅ Aprovado  
**Tipo:** Frontend / HTML

**Problema:** Link "Loja" aparece no menu mobile mas está comentado no desktop.

**Solução:**
- Remover o link da Loja do menu mobile também
- Manter todo o código da seção Loja comentado/oculto para implementação futura
- Não deletar nenhum código relacionado à loja

**Decisão Admin:** Loja será implementada futuramente. Código preservado, apenas oculto de ambos os menus.

---

### 3. SEO e Meta Tags
**Status:** ✅ Aprovado  
**Tipo:** Frontend / SEO

**Problema:** Faltam meta tags para SEO e compartilhamento em redes sociais.

**Solução:**
- Adicionar `<meta name="description">` otimizado
- Implementar Open Graph tags (og:title, og:description, og:image, og:url)
- Adicionar Twitter Card tags
- Criar favicon e apple-touch-icon com logo Mente MX
- Criar `sitemap.xml` e `robots.txt`
- Adicionar dados estruturados (Schema.org — LocalBusiness)

---

### 4. Performance — Otimização de Imagens
**Status:** ✅ Aprovado  
**Tipo:** Performance / Frontend

**Problema:** Imagens PNG/JPG pesadas sem lazy loading. Impacta carregamento em mobile.

**Solução:**
- Converter imagens para WebP com fallback PNG
- Implementar `loading="lazy"` em imagens abaixo do fold
- Comprimir imagens existentes (meta: <100KB por imagem de produto)
- Usar `srcset` para servir tamanhos por dispositivo
- Adicionar `width` e `height` para evitar layout shift

---

## 🟠 Prioridade Média — Experiência do Usuário

### 5. Responsividade Completa
**Status:** ✅ Aprovado  
**Tipo:** Frontend / CSS

**Problema:** CSS legado não cobre breakpoints modernos. Grids não colapsam em mobile.

**Solução:**
- Adicionar media queries: 1024px (tablet landscape), 768px (tablet), 480px (mobile)
- Colapsar grids de campeões, serviços e esportes para 1-2 colunas
- Ajustar tamanhos de fonte para mobile
- Testar em: iPhone SE, Galaxy S21, iPad, iPad Pro

---

### 6. Acessibilidade (A11y)
**Status:** ✅ Aprovado  
**Tipo:** Frontend / HTML + CSS

**Problema:** Imagens sem alt, botões sem aria-label, contraste insuficiente, FAQ sem semântica.

**Solução:**
- Adicionar `alt` descritivo em todas as imagens
- Usar `role="button"` e `tabindex="0"` em elementos clicáveis não-nativos
- Ajustar contraste de textos cinza (mínimo WCAG AA 4.5:1)
- Adicionar `aria-expanded` no FAQ
- Testar com leitor de tela (NVDA ou VoiceOver)

---

### 7. Animações de Entrada (Scroll Reveal)
**Status:** ✅ Aprovado  
**Tipo:** Frontend / JavaScript + CSS

**Problema:** Seções aparecem sem transição. Falta impacto visual ao scrollar.

**Solução:**
- Implementar Intersection Observer nativo (sem lib externa)
- Fade-in + slide-up suave (300-400ms, ease-out)
- Aplicar em: cards de campeões, serviços, depoimentos, FAQ, stats
- Manter sutil — sem exageros

---

### 8. Contadores Animados (Count-Up)
**Status:** ✅ Aprovado  
**Tipo:** Frontend / JavaScript

**Problema:** Números na seção stats são estáticos. Sem impacto visual.

**Solução:**
- Animação count-up quando a seção #stats entra na viewport
- Duração: 2s com easing
- Números finais: +1K, +114, +9, 8
- Usar Intersection Observer (mesmo do item 7)

---

### 9. Depoimentos — Integração com Google Reviews
**Status:** ✅ Aprovado  
**Tipo:** Frontend / Integração

**Problema:** Apenas 3 depoimentos fixos. Pouca prova social para +1K pilotos.

**Solução:**
- Integrar com Google Places API para puxar reviews reais
- Transformar seção em carrossel com auto-play (5s por slide)
- Exibir foto do reviewer, nome, nota e texto
- Fallback: manter depoimentos estáticos caso API falhe
- Adicionar link "Ver todos no Google" ao final

**Decisão Admin:** Depoimentos vieram do Google. Integrar diretamente com a API.

---

### 10. CTA Flutuante Multi-Canal
**Status:** ✅ Aprovado  
**Tipo:** Frontend / UX

**Problema:** Apenas WhatsApp como canal rápido de contato.

**Solução:**
- Manter botão WhatsApp como principal (verde, pulsante)
- Ao clicar/hover, expandir mini-menu com: WhatsApp, Instagram, Email
- Animação suave de expansão (fan-out)
- Fechar ao clicar fora

---

## 🟡 Prioridade Baixa — Diferenciais e Inovação

### 11. Dark/Light Mode Toggle
**Status:** ✅ Aprovado  
**Tipo:** Frontend / CSS + JavaScript

**Solução:**
- Toggle sol/lua no navbar (ao lado do hamburger em mobile)
- Usar CSS custom properties para trocar paleta
- Salvar preferência no localStorage
- Respeitar `prefers-color-scheme` do sistema como default

**Decisão Admin:** Aprovado para implementação.

---

### 12. Seção Blog / Dicas Mentais
**Status:** ✅ Aprovado  
**Tipo:** Frontend / Conteúdo / SEO

**Solução:**
- Criar página `blog.html` separada (não na index)
- Seção na index com 3 cards de "últimos artigos" linkando para o blog
- Posts iniciais estáticos (HTML)
- Temas: controle de ansiedade, foco pré-prova, rotina mental, visualização
- Futuramente: integrar com headless CMS (Notion API ou Contentful)

**Decisão Admin:** Aprovado. Quem entra no site já deve sentir que está aprendendo algo.

---

### 13. Internacionalização (i18n) — PT/ES/EN
**Status:** ✅ Aprovado  
**Tipo:** Frontend / JavaScript

**Solução:**
- Seletor de idioma no navbar (bandeiras ou siglas PT|ES|EN)
- Arquivos JSON de tradução (`/i18n/pt.json`, `/i18n/es.json`, `/i18n/en.json`)
- Atributos `data-i18n` nos elementos de texto
- Script que troca textos dinamicamente
- Salvar idioma selecionado no localStorage
- Começar com Espanhol (maior público latino fora do Brasil)

**Decisão Admin:** Aprovado. Cria identificação com a marca em outros países.

---

### 14. Instagram Feed
**Status:** 🚫 Adiado (decisão do dono da marca)  
**Tipo:** Frontend / Integração

**Nota:** Código do Elfsight permanece comentado. Será reativado futuramente caso o dono da marca autorize. Não remover o código.

---

### 15. Página de Resultados / Hall da Fama
**Status:** ✅ Aprovado  
**Tipo:** Frontend / Nova Página

**Solução:**
- Criar `resultados.html` — página separada (NÃO na index)
- Timeline de conquistas por temporada
- Filtros: ano, categoria, modalidade
- Cards: foto, nome do piloto, título, ano
- Link na navbar: "Resultados" ou "Hall da Fama"

**Decisão Admin:** Aprovado como página separada. Não incluir na index.

---

### 16. Microinterações Premium
**Status:** ✅ Aprovado  
**Tipo:** Frontend / CSS + JavaScript

**Solução:**
- Glow effect laranja nos cards de serviço ao hover
- Ripple effect nos botões de compra/CTA
- Shake sutil nos CTAs principais ao hover
- Transições mais elaboradas nos cards de campeões
- Sem cursor customizado (pode ser excessivo)

---

### 17. Loading Screen Temática (Motocross)
**Status:** ✅ Aprovado — Requer elaboração  
**Tipo:** Frontend / CSS + JavaScript / Design

**Conceito aprovado pelo Admin:**
- Tela de loading com tema de motocross/barro
- Ideias a explorar:
  - Silhueta 2D de moto passando com respingos de lama
  - Logo Mente MX revelando por trás de "barro" que se limpa
  - Barra de progresso estilizada como trilha de terra
  - Partículas de terra/lama que se dissipam revelando o site
- Duração máxima: 2-3s
- Apenas na primeira visita (sessionStorage)
- Deve ser leve (CSS animations + SVG, sem vídeo pesado)

**Decisão Admin:** Quer mais sugestões visuais antes de implementar. Criar protótipos.

---

### 18. PWA (Progressive Web App)
**Status:** ✅ Aprovado  
**Tipo:** Frontend / Infraestrutura

**Solução:**
- Criar `manifest.json` com cores da marca (laranja/preto)
- Ícones em múltiplos tamanhos (192px, 512px)
- Service Worker básico para cache de assets estáticos
- Permitir "Adicionar à tela inicial"
- Funcionar offline com última versão cacheada

---

## 📊 Resumo Final

| # | Melhoria | Prioridade | Tipo | Status |
|---|---|---|---|---|
| 1 | Formulário com persistência | 🔴 Alta | Backend | ✅ |
| 2 | Ocultar Loja do menu mobile | 🔴 Alta | Frontend | ✅ |
| 3 | SEO e Meta Tags | 🔴 Alta | SEO | ✅ |
| 4 | Otimização de Imagens | 🔴 Alta | Performance | ✅ |
| 5 | Responsividade completa | 🟠 Média | CSS | ✅ |
| 6 | Acessibilidade | 🟠 Média | HTML/CSS | ✅ |
| 7 | Animações de scroll | 🟠 Média | JS/CSS | ✅ |
| 8 | Contadores animados | 🟠 Média | JavaScript | ✅ |
| 9 | Depoimentos Google Reviews | 🟠 Média | Integração | ✅ |
| 10 | CTA multi-canal | 🟠 Média | UX | ✅ |
| 11 | Dark/Light mode | 🟡 Baixa | CSS/JS | ✅ |
| 12 | Blog / Dicas Mentais | 🟡 Baixa | Conteúdo | ✅ |
| 13 | Internacionalização | 🟡 Baixa | JavaScript | ✅ |
| 14 | Instagram Feed | 🟡 Baixa | Integração | 🚫 Adiado |
| 15 | Hall da Fama (página) | 🟡 Baixa | Nova Página | ✅ |
| 16 | Microinterações | 🟡 Baixa | CSS/JS | ✅ |
| 17 | Loading Screen temática | 🟡 Baixa | Design/CSS | ✅ (elaborar) |
| 18 | PWA | 🟡 Baixa | Infraestrutura | ✅ |

---

## 🔗 Dependências entre Tarefas

- **#7 e #8** podem ser implementados juntos (mesmo Intersection Observer)
- **#11** depende de #5 (responsividade deve estar ok antes de criar light mode)
- **#12 e #15** são páginas novas — podem ser paralelas
- **#17** depende de decisão de design (protótipos primeiro)
- **#18 (PWA)** deve ser implementado após #3 (SEO) e #4 (performance)

---

> 📅 Última atualização: 27/05/2026
