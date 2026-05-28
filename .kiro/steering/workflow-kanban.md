# Fluxo de Trabalho Kanban — REGRA OBRIGATÓRIA

## Processo para Iniciar Qualquer Tarefa

Ao receber instrução para trabalhar em uma tarefa do Kanban, SEMPRE executar nesta ordem:

### 1. Preparação
- Atribuir (assign) a issue ao usuário `prbretas`
- Mover o card no projeto #6 para a coluna **"In Progress"**

### 2. Desenvolvimento
- Criar branch a partir da `main` seguindo o padrão de nomenclatura:
  - `feature/nome` para novas funcionalidades
  - `fix/nome` para correções
  - `style/nome` para ajustes visuais
  - `perf/nome` para performance
  - `docs/nome` para documentação
- Implementar a solução
- Commitar com Conventional Commits

### 3. Entrega
- Push da branch para o remote
- Abrir PR para `main` com `Closes #N` no body (N = número da issue)
- Mover o card no projeto #6 para a coluna **"Code Review"**

### 4. PARAR
- **NÃO fazer merge** — o admin (prbretas) revisa e faz merge manualmente
- **NÃO mover para Done** — o admin move o card após aprovar
- **NÃO iniciar próxima tarefa** até o admin confirmar conclusão da atual

## Comandos Úteis

```bash
# Atribuir issue
gh issue edit <N> --repo prbretas/mentemx --add-assignee prbretas

# Mover card no projeto (requer ID do item e do campo Status)
gh project item-edit --project-id <PID> --id <ITEM_ID> --field-id <FIELD_ID> --single-select-option-id <OPTION_ID>
```

## Regras Absolutas
- NUNCA pular a etapa de atribuição
- NUNCA fazer merge direto
- NUNCA mover card para Done
- SEMPRE esperar confirmação do admin antes da próxima tarefa
