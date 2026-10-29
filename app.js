const express = require('express')

const router = require('./router/approuter')

const cors = require('cors')

const app = express();

app.use(express.json())

app.use(cors())

app.use('/api/todo',router)

module.exports = app