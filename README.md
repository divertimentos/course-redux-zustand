# Curso de Redux + Zustand (RocketSeat)

# Introdução

- A diferença entre Redux e ContextAPI é que os dois são diferentes :shrug:
- O React tem três tipos de estado: local, global e server state. Local é aquele dentro do componente; global é aquele compartilhado pela aplicação inteira; server state são informações recebidas via API que salvamos em estados.
- Hoje em dia, o Redux é utilizado apenas para estados globais. Antigamente, era usado para esses três propósitos.

## Arquitetura do Redux (AKA Flux)

- Action: avisa para o Redux que o usuário quer atualizar o estado
- Reducer: divide o grande estadão em pequenos estadinhos dentro da store, para podermos manipular cada um separadamente. Mais de um reducer podem ouvir à mesma ação, o que significa que a relação ação + reducer não é de 1:1
- Quando o reducer ouve a ação, aí sim ele dispara a atualização de estado e isso se reflete na UI.
