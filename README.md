# API Bank Winston

Este é um projeto simples de uma API de banco que fizemos durante o Bootcamp XP de Node. A API permite a criação de contas bancárias, realização de depósitos, saques e exclusões.

## Funcionalidades

- Criação de contas bancárias com ID, nome e saldo.
- Realização de depósitos em contas existentes.
- Saque de saldo de contas existentes.
- Exclusão de contas bancárias.

## Tecnologias Utilizadas

- Node.js
- Express.js
- JavaScript
- Winston (para logs)

## Estrutura do Projeto

O projeto está organizado seguindo uma estrutura modular, com os seguintes componentes:

- **Service:** Lógica de negócios e manipulação de dados.
- **Controller:** Responsável por controlar as interações com a API e chamar os serviços necessários.
- **Repository:** Acesso aos dados, como leitura e escrita em arquivos ou banco de dados.
- **Routes:** Definição das rotas da API.
- **Logs:** Registro de erros e interações do usuário.

## Como Executar

1. Clone este repositório.
2. Instale as dependências usando `npm install`.
3. Execute o servidor com `npm start`.
4. Acesse a API em `http://localhost:4001`. - Eu usei essa porta pq tenho outros projetos, mas fique a vontade para escolher a porta para rodar seu projeto.


