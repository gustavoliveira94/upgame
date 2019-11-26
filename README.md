# UpGame

## DICAS

1. Botão A vai para o lado esquerdo da pista, botão S vai para o centro da pista, botão D vai para o lado direito, botão S ativa o TURBO(Só pode ser usado uma vez).

2. Aperte ESC para pausar o game.

3. A cada 20 metros ou 20 segundos contabiliza uma volta e com 15 voltas termina a partida.

## CRIAÇÃO DO GAME

1. Carro muda da pista de acordo com o flex da pista.
2. Obstáculos são criados com math.random e pode ser flex-start, center ou flex-end.
3. Quando o jogo é pausado não renderiza obstáculos e não contabiliza número de voltas.

## Instalação

1. Baixe e instale o Node: [https://nodejs.org/]
2. Clone o repositório: `git clone https://github.com/gustavoliveira94/upgame.git` (SSH) or `https://github.com/gustavoliveira94/upgame.git` (HTTPS)
3. \[Opcional\] Instale o Yarn globalmente: `npm install -g yarn`
4. Instale as dependências do projeto: `yarn install` ou `npm install`
5. Inicie o ambiente de desenvolvimento: `npm start` ou `yarn start`.

## Principais dependências

* [React](https://reactjs.org/)
* [Redux](http://redux.js.org)
* [Redux-thunk](https://github.com/reduxjs/redux-thunk)
* [Styled-components](https://styled-components.com/)

## Estrutura de diretórios

```
/
├─ src/              # Aplicação
├─ ├─actions/        # Ações redux
├─ ├─components/     # Componentes react
├─ ├─reducers/       # Reducers
├─ ├─store/          # Configuração store redux 
├─ ├─styles/         # Arquivos relacionados a estilização
├─ .editorconfig     # Preferência do editorconfig
├─ .eslintrc         # Preferência do linter Javascript
├─ .gitignore        # Lista de arquivos e pastas ignoradas pelo git
├─ .prettierrc       # Preferência do prettier
├─ package.json      # Manifesto do projeto
└─ README.md         # Esse arquivo
```