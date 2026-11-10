# Cadastro de Produtos

Projeto da atividade de Node.js, Express e TypeScript.

## Requisitos

- Node.js instalado
- npm

## Instalação

Na pasta principal do projeto, execute:

```bash
npm install
```

## Executar a API

```bash
npm run dev
```

A API ficará disponível em `http://localhost:3000`.

Rotas:
- GET `/sobre`
- GET `/saudacao/:nome`
- GET `/produto/:id`
- POST `/produto`
- PUT `/produto`
- DELETE `/produto/:id`

## Testar a classe Cliente

Em outro terminal, na pasta principal, execute:

```bash
npm run testes:cliente
```

Os testes usam os três clientes informados na atividade. A idade segue a fórmula solicitada: ano atual menos ano de nascimento.

## Entrega

A atividade pede um repositório público no GitHub com os arquivos do projeto sem compactação. Extraia esta pasta e envie os arquivos para um repositório público. Não entregue o arquivo ZIP.

Salve prints reais da execução dos testes em `docs/testes`.
