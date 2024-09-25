# Curso de Redux e Zustand (Rocketseat)

![redux-app-screenshot](https://github.com/ggteixeira/course-redux-zustand-rocketseat/blob/main/media/redux.png)

- A diferença entre Redux e ContextAPI é que os dois são diferentes :shrug:
- O React tem três tipos de estado: local, global e server state. Local é aquele dentro do componente; global é aquele compartilhado pela aplicação inteira; server state são informações recebidas via API que salvamos em estados.
- Hoje em dia, o Redux é utilizado apenas para estados globais. Antigamente, era usado para esses três propósitos.

## Arquitetura do Redux (AKA Flux)

- Action: avisa para o Redux que o usuário quer atualizar o estado
- Reducer: divide o grande estadão em pequenos estadinhos dentro da store, para podermos manipular cada um separadamente. Mais de um reducer podem ouvir à mesma ação, o que significa que a relação ação + reducer não é de 1:1
- Quando o reducer ouve a ação, aí sim ele dispara a atualização de estado e isso se reflete na UI.

## Store

- O reducer fica dentro da store, pois ele vai ser compartilhado com todos os componentes da aplicação
- Isso significa que podemos ter, como dito antes, vários reducers, todos dentro dessa mesma store. Criamos esses reducers separados usando uma função do toolkit chamada `createSlice`.

## Interface

Os caras são muito zé biblioteca. Nos últimos dois dias eu acho que instalei mais bibliotecas do que nos últimos 2 anos de firma. E eu não estou brincando.
Instalamos mais uma lib, agora para criar um collapsible na sidebar.

Ok, aprendi uma coisa legal. No Tailwind é simples criar classe condicional. Para, por exemplo, inserir uma borda em uma div que a lib de collapse fica trocando dinamicamente de classe para indicar que o elemento está aberto ou fechado, podemos usar a seguinte sintaxe:

```javaScript
<Collapsible.Root className="data-[state=open]:border-4" />;
```

No caso, a propriedade dinâmica do elemento da lib é `data-state=open` e `data-state=close`.

E aí vem outra coisa legal que aprendi sobre Tailwind. Usando a classe `group`, você trata descendentes de um componentes como pertencentes a um grupo em comum. Isso porque aquele `data-state` é do `Root`, mas na verdade o que queremos estilizar é ícone (de uma outra lib rsrs) chamado `Chevron`. Então, adicionado o `group` no pai, basta adicionar ele como prefixo. Assim:

```javaScript
<ChevronDown className="group-data-[state=open]:rotate-180" />;
```

## De volta ao Redux

Os reducers pertencentes a cada slice são as actions.

Para escrever testes, usamos o `vitest`. Super legal!

Para mockar dados para simular uma API, usamos o `json-server`.

## `createAsyncThunk`

Ele é usado para adicionar funções não-puras como acions no slice. Essa função existe no Redux Toolkit porque, por design, as actions precisam ser funções puras, ou seja, não podem lidar com efeitos colaterais externos a elas.

Agora nós aprendemos mais outra coisa chamada `extraReducers`, que adiciona ainda mais uma camada de complexidade confusa no Redux Toolkig, que em teoria era pra ser uma simplificação da parada.

Chegando a mais um final de conteúdo sobre Redux com a mesma sensação de que ele é

- desnecessariamente complexo,
- verboso para fazer coisas simples,
- de difícil entendimento,
- de difícil manutenção,
- com várias "gírias" próprias (que fogem à ideia do React) que o dev precisa decorar ou praticar dezenas de vezes apenas para aprender a gerenciar estados da forma arbitrária que desenvolvedores da ferramenta decidiram que seria melhor :shrug:

Agora eu entendo por que estudar Redux é algo que eu relutei por tanto tempo. É porque ele não faz sentido lógico. Ele é desnecessariamente confuso e, muito embora eu tenha entendido 100% das explicações, finalizo o curso com uma sensação de que eu teria que rever tudo isso uma dezena de vezes até aprender, pra daqui a 2 anos eles lançarem uma outra versão com outras abstrações, outros hooks, outras camadas, e eu me ver obrigado a reaprender tudo novamente.
