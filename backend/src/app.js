const express = require("express")
const routes = require("./routes")
const cors = require("cors")
const { errors } = require("celebrate")
// npm install to restore project
// FIGMA.COM
const app = express()

// app.use(cors({ origin : 'http://aplicacao.com'}))
app.use(cors())

app.use(express.json())

app.use(routes)

app.use(errors())

module.exports = app

/*
Métodos de requisição:
GET: Buscar, POST: Criar, PUT: Alterar, DELETE: Excluir

Tipos de parametros:
QUERY PARAMS -> Parametros nomeados enviados na rota apos " ? " (Filtros de consultas, paginação...) Ex: /users?name=wildes
Pegando query params: const query = request.query - Result: { name: 'wildes' }

ROUTE PARAMS -> Parametros utilizados para identificar recursos Ex: No node Ex: /users/:id na rota Ex: /users/35
Pegando route params: const params = request.params - Result: { id: '35' }

REQUEST BODY -> Corpo da requisição, uusado para criar ou alterar resursos (Se for utilizar JSON tem que informar antes das rotas app.use(express.json()))
Pegando o request body: const body = request.body
*/

/*
Para banco de dados usaremos um query builder (Knex) para reazalizar consultar em qualquer driver (Mysql, postgress)
*/


