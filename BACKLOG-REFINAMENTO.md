# 📋 BACKLOG — Refinamento de Issues

> Detalhamento técnico das issues pendentes no Kanban.  
> Cada issue tem critérios de aceite, dependências e estimativa de esforço.

---

## 🔴 Prioridade Alta

### Issue #5 — Formulário com Persistência de Leads
**Status:** Aguardando configuração do Google Sheet  
**Esforço:** ~2h  
**Dependências:** Conta Google com Apps Script habilitado

#### Descrição Técnica
Integrar os formulários de contato e waitlist com Google Sheets via Apps Script para persistir leads.

#### Pré-requisitos
- [ ] Criar Google Sheet com colunas: Timestamp, Nome, Email, WhatsApp, Modalidade, Mensagem, Origem (contato/waitlist)
- [ ] Publicar Apps Script como Web App (acesso: qualquer pessoa)
- [ ] Obter URL do endpoint

#### Implementação
1. Criar função `submitToSheet(data)` no `script.js`
2. Atualizar `sendContact()` para chamar `submitToSheet` antes do redirect WhatsApp
3. Atualizar `joinWaitlist()` para chamar `submitToSheet`
4. Adicionar loading state nos botões durante envio
5. Exibir mensagem de sucesso independente do WhatsApp
6. Fallback: se API falhar, continuar com redirect WhatsApp normalmente

#### Critérios de Aceite
- [ ] Dados salvos no Google Sheet ao enviar formulário de contato
- [ ] Dados salvos no Google Sheet ao entrar na waitlist
- [ ] Mensagem de sucesso exibida ao usuário
- [ ] Redirect para WhatsApp funciona normalmente
- [ ] Se API falhar, formulário não trava (fallback gracioso)
- [ ] Funciona em mobile

---

### Issue #16 — Dark/Light Mode Toggle
**Status:** Backlog (deixar para o final)  
**Esforço:** ~4h (requer implementação cuidadosa)  
**Dependências:** Nenhuma

#### Descrição Técnica
Implementar toggle de tema claro/escuro com persistência.

#### Abordagem Recomendada (refazer do zero)
1. Usar classe `.light-mode` no `<html>` (não `data-theme`)
2. NÃO usar inline styles no nav — usar apenas CSS
3. Script inline no `<head>` para aplicar tema antes do render
4. Testar CADA seção individualmente antes de commitar
5. Manter seções com fundo especial (hero com vídeo, stats laranja) sem alteração

#### Critérios de Aceite
- [ ] Toggle funciona ao clicar (alterna entre 🌙 e ☀️)
- [ ] Tema persiste ao recarregar página (localStorage)
- [ ] Sem flash de tema errado ao carregar
- [ ] Nav muda de cor corretamente ao scrollar em ambos os temas
- [ ] Hero mantém textos brancos (fundo é vídeo escuro)
- [ ] Seção Stats mantém fundo laranja
- [ ] Cards, FAQ, formulários legíveis em ambos os temas
- [ ] Funciona em mobile

---

## 🟠 Prioridade Média

### Issue #14 — Depoimentos Google Reviews
**Status:** Aguardando API Key  
**Esforço:** ~3h  
**Dependências:** Google Places API Key (paga após cota gratuita)

#### Descrição Técnica
Integrar seção de depoimentos com Google Places API para exibir reviews reais.

#### Pré-requisitos
- [ ] Criar projeto no Google Cloud Console
- [ ] Habilitar Places API
- [ ] Obter API Key com restrição de domínio (mentemx.com.br)
- [ ] Identificar Place ID do Mente MX no Google

#### Implementação
1. Criar função `fetchGoogleReviews(placeId, apiKey)`
2. Renderizar reviews em carrossel com auto-play (5s)
3. Exibir: foto do reviewer, nome, nota (estrelas), texto
4. Fallback: manter depoimentos estáticos se API falhar
5. Cache de reviews no localStorage (TTL: 24h)
6. Link "Ver todos no Google" ao final

#### Critérios de Aceite
- [ ] Reviews reais do Google exibidos na seção
- [ ] Carrossel com auto-play funcional
- [ ] Fallback para depoimentos estáticos se API falhar
- [ ] Não expor API Key no código (usar variável de ambiente ou proxy)

---

## 🟡 Prioridade Baixa

### Issue #17 — Blog / Dicas Mentais
**Status:** Aguardando conteúdo  
**Esforço:** ~4h (estrutura) + conteúdo  
**Dependências:** Textos dos artigos

#### Descrição Técnica
Criar página `blog.html` com artigos estáticos e seção na index com 3 cards de preview.

#### Implementação
1. Criar `blog.html` com layout similar à index (nav, footer reutilizados)
2. Grid de cards de artigos com: título, resumo, data, tag
3. Página individual de artigo (pode ser âncora na mesma página inicialmente)
4. Na index: seção "Dicas Mentais" com 3 cards linkando para o blog
5. Link "Blog" no nav

#### Conteúdo Sugerido (primeiros artigos)
- "5 Técnicas de Controle de Ansiedade Pré-Prova"
- "Como Criar uma Rotina Mental para Treinos"
- "Visualização: A Arma Secreta dos Campeões"

#### Critérios de Aceite
- [ ] Página blog.html acessível e responsiva
- [ ] Mínimo 3 artigos publicados
- [ ] Cards de preview na index linkam corretamente
- [ ] SEO: meta tags em cada artigo
- [ ] Responsivo em mobile

---

### Issue #18 — Internacionalização (i18n)
**Status:** Pronto para implementar  
**Esforço:** ~5h  
**Dependências:** Nenhuma

#### Descrição Técnica
Implementar seletor de idioma com traduções em JSON.

#### Implementação
1. Criar pasta `/i18n/` com `pt.json`, `es.json`, `en.json`
2. Adicionar atributos `data-i18n="chave"` nos elementos de texto
3. Criar função `setLanguage(lang)` que troca textos dinamicamente
4. Seletor de idioma no nav (bandeiras ou PT|ES|EN)
5. Salvar idioma no localStorage
6. Começar com Espanhol (maior público latino)

#### Critérios de Aceite
- [ ] Seletor de idioma visível no nav
- [ ] Textos trocam ao selecionar idioma
- [ ] Idioma persiste ao recarregar
- [ ] Mínimo 2 idiomas: PT e ES
- [ ] Funciona em mobile

---

### Issue #19 — Hall da Fama / Resultados
**Status:** Aguardando dados dos pilotos  
**Esforço:** ~4h (estrutura) + dados  
**Dependências:** Lista de pilotos campeões com fotos

#### Descrição Técnica
Criar página `resultados.html` com timeline de conquistas.

#### Dados Necessários (por piloto)
- Nome completo
- Número
- Foto
- Título conquistado
- Ano
- Categoria/Modalidade

#### Implementação
1. Criar `resultados.html` com layout similar à index
2. Timeline vertical por ano
3. Cards de piloto: foto, nome, título, ano
4. Filtros: ano, categoria, modalidade
5. Link "Hall da Fama" ou "Resultados" no nav

#### Critérios de Aceite
- [ ] Página separada (NÃO na index)
- [ ] Timeline funcional com filtros
- [ ] Responsivo em mobile
- [ ] Mínimo 10 pilotos listados

---

### Issue #21 — Loading Screen Temática
**Status:** Aguardando protótipos visuais  
**Esforço:** ~3h  
**Dependências:** Decisão de design

#### Opções de Conceito
1. **Silhueta 2D de moto** passando com respingos de lama (CSS animation + SVG)
2. **Logo revelando** por trás de "barro" que se limpa (clip-path animation)
3. **Barra de progresso** estilizada como trilha de terra
4. **Partículas de terra** que se dissipam revelando o site (canvas ou CSS)

#### Restrições
- Máximo 2-3 segundos
- Apenas na primeira visita (sessionStorage)
- Leve: CSS animations + SVG (sem vídeo pesado)
- Deve funcionar em mobile sem lag

---

### Issue #22 — PWA (Progressive Web App)
**Status:** Pronto para implementar  
**Esforço:** ~2h  
**Dependências:** Nenhuma

#### Implementação
1. Criar `manifest.json` com cores da marca
2. Criar ícones em 192px e 512px (usar logo mentemx 1.1)
3. Criar `sw.js` (Service Worker) com cache de assets estáticos
4. Registrar SW no `script.js`
5. Adicionar `<link rel="manifest">` no head

#### Critérios de Aceite
- [ ] "Adicionar à tela inicial" aparece no mobile
- [ ] App instalável com ícone correto
- [ ] Funciona offline com última versão cacheada
- [ ] Cores da marca no splash screen (laranja/preto)

---

## 📊 Resumo de Priorização

| Issue | Pronta? | Esforço | Próximo Passo |
|---|---|---|---|
| #5 Formulário | ❌ Precisa Google Sheet | 2h | Criar Sheet + Apps Script |
| #16 Dark Mode | ❌ Deixar pro final | 4h | Reimplementar com cuidado |
| #14 Depoimentos | ❌ Precisa API Key | 3h | Configurar Google Cloud |
| #17 Blog | ❌ Precisa conteúdo | 4h | Escrever artigos |
| #18 i18n | ✅ Pronta | 5h | Implementar |
| #19 Hall da Fama | ❌ Precisa dados | 4h | Coletar dados pilotos |
| #21 Loading Screen | ❌ Precisa protótipo | 3h | Decidir conceito |
| #22 PWA | ✅ Pronta | 2h | Implementar |

---

> 📅 Última atualização: 28/05/2026
