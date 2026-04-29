# 🍕 PizzariaLilo API

API REST para gerenciamento de pedidos de uma pizzaria, desenvolvida com Node.js, Express e MongoDB.

---

## Tecnologias utilizadas

* Node.js
* Express
* MongoDB
* Mongoose
* JWT (autenticação)
* Bcrypt (hash de senha)

---

## Arquitetura

O projeto segue o padrão **MVC**, organizado em:

* **Models** → definição dos dados (MongoDB)
* **Controllers** → tratamento das requisições
* **Services** → regras de negócio
* **Routes** → definição dos endpoints
* **Middlewares** → autenticação (JWT)
* **Config** → conexão com banco

---

## Autenticação

A API utiliza **JWT (JSON Web Token)**.

Após o login, é necessário enviar o token nas requisições protegidas:

```
Authorization: Bearer SEU_TOKEN
```

---

## Como executar o projeto

```bash
npm install
npm run dev
```

Certifique-se de que o MongoDB esteja rodando:

```
mongodb://127.0.0.1:27017/pizzariaLilo
```

---

## Popular banco (dados iniciais)

```bash
npm run seed
```

Esse comando cria:

* Sabores
* Bordas
* Adicionais

---

## Endpoints principais

### Autenticação

* `POST /api/auth/register`
* `POST /api/auth/login`

---

### Sabores

* `GET /api/sabores`
* `POST /api/sabores` (protegido)

---

### Bordas

* `GET /api/bordas`
* `POST /api/bordas` (protegido)

---

### Adicionais

* `GET /api/adicionais`
* `POST /api/adicionais` (protegido)

---

### Pizzas

* `GET /api/pizzas`
* `POST /api/pizzas` (protegido)

---

### Pedidos

* `GET /api/pedidos` (protegido)
* `POST /api/pedidos` (protegido)

---

## Regra de negócio (preço da pizza)

O valor da pizza é calculado automaticamente:

```
Preço = (média dos sabores × tamanho) + borda + adicionais
```

### Tamanhos:

* P → valor base
* M → +20%
* G → +50%

---

## Testes

Os endpoints foram testados utilizando o **Thunder Client**, com:

* Criação de usuário
* Login e geração de token
* Acesso a rotas protegidas
* Criação de pizzas e pedidos

---

## Observações

* Senhas são armazenadas com hash
* Rotas protegidas utilizam middleware JWT

---
