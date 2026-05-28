# Instruções para Documentação — Mente MX

## Fluxo de Trabalho (REGRA OBRIGATÓRIA)

Ao iniciar qualquer tarefa do Kanban, SEMPRE seguir este fluxo:

1. **Atribuir** a issue ao usuário `prbretas`
2. **Mover o card** para a coluna "In Progress" (desenvolvimento)
3. **Criar branch** a partir da main com o padrão de nomenclatura
4. **Desenvolver** a solução na branch
5. **Commitar e fazer push** da branch
6. **Abrir PR** para a main com referência à issue (Closes #N)
7. **Mover o card** para a coluna "Code Review"
8. **PARAR** — O admin (prbretas) faz o code review manualmente e o merge
9. **O admin move** o card de "Code Review" para "Done"

⚠️ NUNCA mover um card para "Done" automaticamente.  
⚠️ NUNCA fazer merge sem que o admin tenha revisado.  
⚠️ Só iniciar a próxima tarefa APÓS o admin confirmar que a anterior está concluída.

## Padrões de Commit

Usar Conventional Commits:
- `feat:` nova funcionalidade
- `fix:` correção de bug
- `style:` ajustes visuais (CSS, layout, cores)
- `docs:` documentação (README, MELHORIAS, etc.)
- `perf:` melhoria de performance
- `refactor:` refatoração sem mudança visual
- `content:` atualização de conteúdo (textos, imagens)
- `ci:` mudanças no CI/CD
- `chore:` manutenção geral

## Padrões de Branch

```
feature/nome-da-feature
fix/descricao-do-bug
style/ajuste-visual
docs/atualizacao-docs
content/novo-conteudo
perf/otimizacao
ci/ajuste-pipeline
```

## Estrutura de Arquivos

- `index.html` — Página única (SPA estática)
- `styles/style.css` — CSS principal (NÃO editar css/bootstrap.css ou libs)
- `scripts/script.js` — JavaScript principal
- `img/` — Imagens (usar WebP quando possível)
- `img/produtos/` — Fotos dos produtos da loja
- `video/` — Vídeos do hero

## Regras

1. Nunca commitar credenciais reais do Firebase
2. Manter CNAME intacto (mentemx.com.br)
3. Não editar CSS de terceiros (bootstrap, animate, owl, font-awesome)
4. Testar responsividade antes de abrir PR
5. Imagens novas devem ser otimizadas antes do commit
