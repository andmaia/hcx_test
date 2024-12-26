# Cypress Test Automation

Este repositório contém testes automatizados usando Cypress e a biblioteca `cypress-cucumber-preprocessor`.

## Instalação

### Pré-requisitos

- Node.js (>= 12.x)
- npm (>= 6.x) ou yarn

### Passos para Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    ```

2. Instale as dependências do projeto:

    ```bash
    npm install
    ```
    ou

    ```bash
    yarn install
    ```

## Estrutura do Projeto

- `cypress/` - Contém os arquivos de teste do Cypress.
- `cypress/e2e/` - Contém os arquivos `.feature` com os cenários de teste escritos em Gherkin.
- `cypress/support/step_definitions/` - Contém os arquivos de definições de passo (step definitions) para os testes BDD.
- `cypress.config.js` - Configuração do Cypress.

## Executando os Testes

### Abrindo a Interface do Cypress

Para abrir a interface gráfica do Cypress, use o comando:

```bash
npx cypress open
