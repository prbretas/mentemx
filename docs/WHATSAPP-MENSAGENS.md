# 📱 WhatsApp — Mensagens Padrão

> Edite as mensagens abaixo conforme desejar.  
> Após aprovar, copie o trecho HTML correspondente e cole no `index.html`.  
> Número: **+55 47 99210-8650**

---

## Como funciona

O link WhatsApp segue o formato:
```
https://wa.me/5547992108650?text=MENSAGEM_AQUI
```
A mensagem precisa ter espaços substituídos por `%20` (encoding de URL).  
Caracteres especiais como `?`, `!`, `ç`, `ã` também precisam ser codificados.  
Use a ferramenta: https://www.urlencoder.org para converter o texto.

---

## 1. Botão "Contratar" — Mentoria em Grupo

**Mensagem atual:**
```
Quero a Sessão Individual
```

**Mensagem sugerida:**
```
Olá! Vi o site da Mente MX e tenho interesse na Mentoria em Grupo. 
Pode me passar mais informações sobre datas, horários e como funciona?
```

**URL encoded:**
```
Ol%C3%A1!%20Vi%20o%20site%20da%20Mente%20MX%20e%20tenho%20interesse%20na%20Mentoria%20em%20Grupo.%20Pode%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20sobre%20datas%2C%20hor%C3%A1rios%20e%20como%20funciona%3F
```

**HTML pronto para colar:**
```html
<a href="https://wa.me/5547992108650?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Mente%20MX%20e%20tenho%20interesse%20na%20Mentoria%20em%20Grupo.%20Pode%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20sobre%20datas%2C%20hor%C3%A1rios%20e%20como%20funciona%3F" target="_blank" class="btn-serv">Contratar</a>
```

---

## 2. Botão "Contratar" — Pacote Família MX

**Mensagem atual:**
```
Quero o Plano Mensal
```

**Mensagem sugerida:**
```
Olá! Tenho interesse no Pacote Família MX da Mente MX. 
Pode me contar mais sobre como funciona o acompanhamento e os próximos passos para começar?
```

**URL encoded:**
```
Ol%C3%A1!%20Tenho%20interesse%20no%20Pacote%20Fam%C3%ADlia%20MX%20da%20Mente%20MX.%20Pode%20me%20contar%20mais%20sobre%20como%20funciona%20o%20acompanhamento%20e%20os%20pr%C3%B3ximos%20passos%20para%20come%C3%A7ar%3F
```

**HTML pronto para colar:**
```html
<a href="https://wa.me/5547992108650?text=Ol%C3%A1!%20Tenho%20interesse%20no%20Pacote%20Fam%C3%ADlia%20MX%20da%20Mente%20MX.%20Pode%20me%20contar%20mais%20sobre%20como%20funciona%20o%20acompanhamento%20e%20os%20pr%C3%B3ximos%20passos%20para%20come%C3%A7ar%3F" target="_blank" class="btn-serv">Contratar</a>
```

---

## 3. Botão "Contratar" — Pacote Equipe MX

**Mensagem atual:**
```
Quero o Programa Anual
```

**Mensagem sugerida:**
```
Olá! Vi o Pacote Equipe MX no site da Mente MX e gostaria de saber mais sobre o programa para equipes. 
Podemos conversar sobre como funciona o acompanhamento?
```

**URL encoded:**
```
Ol%C3%A1!%20Vi%20o%20Pacote%20Equipe%20MX%20no%20site%20da%20Mente%20MX%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20programa%20para%20equipes.%20Podemos%20conversar%20sobre%20como%20funciona%20o%20acompanhamento%3F
```

**HTML pronto para colar:**
```html
<a href="https://wa.me/5547992108650?text=Ol%C3%A1!%20Vi%20o%20Pacote%20Equipe%20MX%20no%20site%20da%20Mente%20MX%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20programa%20para%20equipes.%20Podemos%20conversar%20sobre%20como%20funciona%20o%20acompanhamento%3F" target="_blank" class="btn-serv">Contratar</a>
```

---

## 4. Link WhatsApp do Menu Mobile

**Atual:** Link simples sem mensagem pré-definida

**Sugestão:** Manter simples ou adicionar mensagem de apresentação:
```
Olá! Vim pelo site da Mente MX e gostaria de mais informações.
```

**HTML pronto para colar:**
```html
<a href="https://wa.me/5547992108650?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Mente%20MX%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." target="_blank" style="color: var(--orange)">💬 WhatsApp</a>
```

---

## 5. Formulário de Contato (sendContact)

**Mensagem atual gerada pelo JS:**
```
Olá! Sou {nome}, vim pelo site Mente MX e quero saber mais sobre as mentorias.
```

**Mensagem sugerida (mais completa):**
```
Olá! Sou {nome}, vim pelo site da Mente MX. 
Gostaria de saber mais sobre as mentorias. Aguardo retorno!
```

> ⚠️ Esta mensagem é gerada dinamicamente pelo JavaScript em `script.js` na função `sendContact()`. Para alterar, edite diretamente no arquivo.

---

## 6. Waitlist — App Mente MX Pro (joinWaitlist)

**Mensagem atual gerada pelo JS:**
```
Olá! Sou {nome}, vim pelo site Mente MX e quero saber mais sobre o Aplicativo MXPilot PRO.
```

**Mensagem sugerida:**
```
Olá! Sou {nome}, entrei na lista de espera do Mente MX Pro pelo site. 
Mal posso esperar pelo lançamento!
```

> ⚠️ Esta mensagem também é gerada dinamicamente. Editar em `script.js` na função `joinWaitlist()`.

---

## ✅ Checklist para aplicar

Após revisar e editar as mensagens:

- [ ] Aprovei a mensagem do botão "Contratar" — Mentoria em Grupo (#1)
- [ ] Aprovei a mensagem do botão "Contratar" — Pacote Família MX (#2)
- [ ] Aprovei a mensagem do botão "Contratar" — Pacote Equipe MX (#3)
- [ ] Aprovei o link do menu mobile (#4)
- [ ] Aprovei a mensagem do formulário de contato (#5)
- [ ] Aprovei a mensagem da waitlist (#6)

---

> 💡 Dica: Você pode personalizar ainda mais adicionando emojis como 🏍️, 🏆, 🧠 nas mensagens para reforçar a identidade da marca.
