# Curso de Redux + Zustand (Rocketseat)

<!--toc:start-->

- [Curso de Redux + Zustand (Rocketseat)](#curso-de-redux-zustand-rocketseat)
- [Introdução](#introdução)
  - [Arquitetura do Redux (AKA Flux)](#arquitetura-do-redux-aka-flux)
  - [Store](#store)
- [Interface](#interface)
- [De volta ao Redux](#de-volta-ao-redux)
<!--toc:end-->

# Introdução

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

# Interface

Os caras são muito zé biblioteca. Nos últimos dois dias eu acho que instalei mais bibliotecas do que nos últimos 2 anos de firma. E eu não estou brincando.
Instalamos mais uma lib, agora para criar um collapsible na sidebar.

Ok, aprendi uma coisa legal. No Tailwind é simples criar classe condicional. Para, por exemplo, inserir uma borda em uma div que a lib de collapse fica trocando dinamicamente de classe para indicar que o elemento está aberto ou fechado, podemos usar a seguinte sintaxe:

```javaScript
<Collapsible.Root className="data-[state=open]:border-4" />
```

No caso, a propriedade dinâmica do elemento da lib é `data-state=open` e `data-state=close`.

E aí vem outra coisa legal que aprendi sobre Tailwind. Usando a classe `group`, você trata descendentes de um componentes como pertencentes a um grupo em comum. Isso porque aquele `data-state` é do `Root`, mas na verdade o que queremos estilizar é ícone (de uma outra lib rsrs) chamado `Chevron`. Então, adicionado o `group` no pai, basta adicionar ele como prefixo. Assim:

```javaScript
<ChevronDown className="group-data-[state=open]:rotate-180" />
```

# De volta ao Redux
