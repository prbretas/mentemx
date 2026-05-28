# 🎯 USER STORIES — Cenários de Teste

> Cenários de teste baseados em user stories para validar a experiência do usuário no site Mente MX.  
> Cada story simula um comportamento real de um visitante.

---

## 👤 Persona 1: Pai de Piloto Jovem (Desktop)

**Contexto:** Pai pesquisando mentoria mental para o filho que compete em motocross. Acessa pelo computador, quer entender o serviço e ver resultados.

### US-01: Descobrir o que é o Mente MX
**Como** pai de um piloto jovem  
**Quero** entender rapidamente o que o Mente MX oferece  
**Para que** eu decida se vale a pena investir na mentoria do meu filho

#### Cenário de Teste
1. Acessar mentemx.com.br
2. Verificar que o hero comunica claramente: "mentoria mental para pilotos"
3. Scrollar até a seção "Sobre" e ler sobre o mentor
4. Verificar que as credenciais (1K+ pilotos, 114+ campeões) são visíveis

#### Critérios de Aceite
- [ ] Hero carrega em menos de 3s
- [ ] Tagline visível sem scroll
- [ ] Seção "Sobre" explica quem é o mentor
- [ ] Números de credibilidade visíveis na seção Stats

---

### US-02: Ver resultados comprovados
**Como** pai de um piloto jovem  
**Quero** ver pilotos que já foram mentorados e seus resultados  
**Para que** eu tenha confiança de que o programa funciona

#### Cenário de Teste
1. Clicar em "Ver Campeões" no hero OU scrollar até a seção
2. Verificar que há cards de campeões com nome, foto e descrição
3. Clicar no Instagram de um campeão (deve abrir em nova aba)
4. Ler depoimentos de outros pais

#### Critérios de Aceite
- [ ] Mínimo 3 campeões exibidos com foto
- [ ] Links do Instagram funcionam (nova aba)
- [ ] Depoimentos de pais visíveis
- [ ] Badge "Campeão" visível nos cards

---

### US-03: Escolher um plano de mentoria
**Como** pai de um piloto jovem  
**Quero** comparar os planos disponíveis e seus preços  
**Para que** eu escolha o mais adequado para o nível do meu filho

#### Cenário de Teste
1. Scrollar até "Serviços" ou clicar "Saiba Mais"
2. Comparar os 3 planos (grupo, família, equipe)
3. Verificar preços e benefícios de cada um
4. Clicar "Contratar" no plano escolhido
5. Verificar que abre WhatsApp com mensagem pré-preenchida

#### Critérios de Aceite
- [ ] 3 planos visíveis com preços
- [ ] Plano "Família MX" destacado como featured
- [ ] Botão "Contratar" abre WhatsApp
- [ ] Mensagem pré-preenchida no WhatsApp

---

### US-04: Entrar em contato
**Como** pai de um piloto jovem  
**Quero** enviar uma mensagem para tirar dúvidas  
**Para que** eu possa conversar antes de contratar

#### Cenário de Teste
1. Scrollar até "Contato" ou clicar no nav
2. Preencher: nome, WhatsApp, email, modalidade, mensagem
3. Selecionar modalidade no dropdown customizado
4. Clicar "Enviar Mensagem"
5. Verificar que redireciona para WhatsApp

#### Critérios de Aceite
- [ ] Todos os campos visíveis e funcionais
- [ ] Custom select abre e permite seleção
- [ ] Validação: nome e email obrigatórios
- [ ] Redirect para WhatsApp com mensagem
- [ ] Mensagem de sucesso exibida

---

## 👤 Persona 2: Piloto Adolescente (Mobile)

**Contexto:** Piloto de 16 anos que viu o Mente MX no Instagram. Acessa pelo celular, quer ver se é "pra ele" e entrar na lista do app.

### US-05: Navegar pelo site no celular
**Como** piloto adolescente no celular  
**Quero** navegar pelo site sem dificuldade  
**Para que** eu consiga ver tudo sem precisar de computador

#### Cenário de Teste
1. Acessar mentemx.com.br no celular (375px)
2. Verificar que o hamburger menu aparece
3. Abrir menu e navegar entre seções
4. Verificar que cards não ficam cortados
5. Verificar que textos são legíveis sem zoom

#### Critérios de Aceite
- [ ] Hamburger menu funcional
- [ ] Cards de serviço em coluna única
- [ ] Textos legíveis (min 14px equivalente)
- [ ] Botões com área de toque adequada (min 44px)
- [ ] Sem scroll horizontal indesejado

---

### US-06: Entrar na lista de espera do App
**Como** piloto adolescente  
**Quero** entrar na lista de espera do Mente MX Pro  
**Para que** eu seja avisado quando o app lançar

#### Cenário de Teste
1. Scrollar até a seção "Mente MX Pro"
2. Verificar badge "Em Breve" visível
3. Preencher: nome, email, modalidade
4. Clicar "Quero Acesso Antecipado"
5. Verificar mensagem de confirmação

#### Critérios de Aceite
- [ ] Seção App visível com mockup do celular
- [ ] Formulário de waitlist funcional
- [ ] Campos: nome, email, modalidade
- [ ] Mensagem de sucesso após envio
- [ ] Redirect para WhatsApp com mensagem personalizada

---

### US-07: Usar o CTA flutuante
**Como** piloto adolescente  
**Quero** entrar em contato rapidamente pelo WhatsApp  
**Para que** eu não precise scrollar até o formulário

#### Cenário de Teste
1. Em qualquer ponto da página, ver botão flutuante verde
2. Clicar no botão
3. Ver menu expandir para cima com 3 opções
4. Clicar em WhatsApp
5. Verificar que abre WhatsApp

#### Critérios de Aceite
- [ ] Botão visível no canto inferior direito
- [ ] Menu expande para CIMA (não para baixo)
- [ ] 3 opções: WhatsApp, Instagram, Email
- [ ] WhatsApp abre com número correto
- [ ] Menu fecha ao clicar fora

---

## 👤 Persona 3: Piloto Profissional (Tablet)

**Contexto:** Piloto profissional que já ouviu falar do Mente MX em competições. Acessa pelo iPad no hotel antes de uma prova.

### US-08: Verificar modalidades atendidas
**Como** piloto profissional de Rally  
**Quero** saber se o Mente MX atende minha modalidade  
**Para que** eu saiba se o programa é relevante para mim

#### Cenário de Teste
1. Acessar site em tablet (768px)
2. Scrollar até "Modalidades Atendidas"
3. Verificar que Rally está listado
4. Ler descrição da modalidade

#### Critérios de Aceite
- [ ] Seção modalidades visível
- [ ] 4 modalidades: Motocross, Rally, Enduro, Outras
- [ ] Cards com ícone, título e descrição
- [ ] Layout em 2 colunas no tablet

---

### US-09: Tirar dúvidas no FAQ
**Como** piloto profissional  
**Quero** ver respostas para perguntas comuns  
**Para que** eu não precise entrar em contato para dúvidas básicas

#### Cenário de Teste
1. Scrollar até FAQ ou clicar no nav
2. Clicar em "A mentoria atende apenas pilotos de motocross?"
3. Verificar que a resposta expande
4. Clicar em outra pergunta
5. Verificar que a anterior fecha

#### Critérios de Aceite
- [ ] Mínimo 6 perguntas no FAQ
- [ ] Apenas uma resposta aberta por vez
- [ ] Animação suave ao expandir/colapsar
- [ ] Funciona com teclado (Enter/Space)
- [ ] aria-expanded alterna corretamente

---

## 👤 Persona 4: Visitante Internacional (Mobile - Espanhol)

**Contexto:** Piloto argentino que viu o Mente MX em uma competição internacional. Não fala português fluente.

### US-10: Entender o site sem falar português
**Como** piloto argentino  
**Quero** entender o conteúdo do site  
**Para que** eu possa avaliar se quero contratar a mentoria

#### Cenário de Teste (futuro — issue #18)
1. Acessar site
2. Encontrar seletor de idioma
3. Trocar para Espanhol
4. Verificar que textos mudam
5. Recarregar página e verificar que idioma persiste

#### Critérios de Aceite (quando i18n for implementado)
- [ ] Seletor de idioma visível no nav
- [ ] Textos trocam para espanhol
- [ ] Idioma persiste ao recarregar
- [ ] Todos os textos traduzidos (não parcial)

---

## 👤 Persona 5: Bot/Crawler (SEO)

**Contexto:** Googlebot indexando o site para resultados de busca.

### US-11: Indexar o site corretamente
**Como** motor de busca  
**Quero** encontrar meta tags e conteúdo estruturado  
**Para que** o site apareça bem posicionado nos resultados

#### Cenário de Teste
1. Verificar `<title>` presente e descritivo
2. Verificar `<meta name="description">` presente
3. Verificar Open Graph tags (og:title, og:description, og:image)
4. Verificar `robots.txt` acessível
5. Verificar `sitemap.xml` acessível
6. Verificar canonical URL

#### Critérios de Aceite
- [ ] Title com menos de 60 caracteres
- [ ] Description com 150-160 caracteres
- [ ] OG tags completas
- [ ] robots.txt não bloqueia páginas públicas
- [ ] sitemap.xml lista todas as páginas
- [ ] Canonical URL aponta para mentemx.com.br

---

## 📊 Matriz de Cobertura

| Cenário | Desktop | Tablet | Mobile | Acessibilidade |
|---|---|---|---|---|
| US-01 Descobrir | ✅ | ✅ | ✅ | — |
| US-02 Resultados | ✅ | ✅ | ✅ | — |
| US-03 Planos | ✅ | ✅ | ✅ | — |
| US-04 Contato | ✅ | ✅ | ✅ | ✅ Teclado |
| US-05 Mobile Nav | — | — | ✅ | ✅ Hamburger |
| US-06 Waitlist | ✅ | ✅ | ✅ | — |
| US-07 CTA Float | ✅ | ✅ | ✅ | ✅ aria-label |
| US-08 Modalidades | ✅ | ✅ | ✅ | — |
| US-09 FAQ | ✅ | ✅ | ✅ | ✅ Teclado + aria |
| US-10 i18n | 🔜 | 🔜 | 🔜 | — |
| US-11 SEO | ✅ | — | — | — |

---

> 📅 Última atualização: 28/05/2026
