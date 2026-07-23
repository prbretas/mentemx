# 🧪 TESTES E2E — Mente MX

> Testes end-to-end para validar o site antes de cada merge.  
> Executados automaticamente via GitHub Actions no CI.

---

## 🔧 Setup

Os testes usam **Playwright** (framework de testes E2E da Microsoft) por ser:
- Gratuito e open-source
- Suporta Chrome, Firefox e Safari
- Roda em CI sem configuração extra
- Testa mobile viewports nativamente

### Instalação Local (opcional, para rodar manualmente)

```bash
npm install
npx playwright install
```

### Rodar Testes Localmente

```bash
npx playwright test
```

---

## 📋 Cenários de Teste

### 1. Navegação
- [ ] Página carrega sem erros no console
- [ ] Todos os links do nav apontam para seções existentes
- [ ] Menu hamburger abre/fecha em mobile
- [ ] Logo no nav linka para o topo (#hero)
- [ ] Scroll suave funciona entre seções

### 2. Hero
- [ ] Vídeo de fundo carrega e reproduz
- [ ] Botão "Saiba Mais" linka para #
- [ ] Botão "Ver Campeões" linka para #campeoes

### 3. Stats (Contadores)
- [ ] Seção stats é visível
- [ ] Contadores animam ao entrar na viewport
- [ ] Valores finais corretos: +1K, +114, +9, 8

### 4. Campeões
- [ ] 3 cards de campeões visíveis
- [ ] Links do Instagram abrem em nova aba
- [ ] Imagens carregam sem erro

### 5. Serviços
- [ ] 3 cards de planos visíveis
- [ ] Botões "Contratar" linkam para WhatsApp
- [ ] Preços exibidos corretamente

### 6. FAQ
- [ ] Perguntas expandem ao clicar
- [ ] Apenas uma pergunta aberta por vez
- [ ] Funciona com teclado (Enter/Space)

### 7. Contato
- [ ] Formulário exibe todos os campos
- [ ] Validação: nome e email obrigatórios
- [ ] Custom select de modalidade funciona
- [ ] Botão enviar redireciona para WhatsApp

### 8. CTA Flutuante
- [ ] Botão WhatsApp visível no canto inferior direito
- [ ] Menu expande para cima ao clicar
- [ ] 3 opções: WhatsApp, Instagram, Email
- [ ] Fecha ao clicar fora

### 9. Responsividade
- [ ] Layout correto em 1920px (desktop)
- [ ] Layout correto em 768px (tablet)
- [ ] Layout correto em 375px (mobile)
- [ ] Hamburger menu aparece em mobile

### 10. Performance
- [ ] Imagens com lazy loading (abaixo do fold)
- [ ] Sem erros 404 no console
- [ ] Página carrega em menos de 5s (3G simulado)

---

## 🚀 Execução no CI

Os testes rodam automaticamente em cada PR via GitHub Actions.  
Se algum teste falhar, o PR é bloqueado até a correção.
