const express = require('express');
const cors = require("cors")
const app = express()
const players = require('./routes/players')

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use("/", players)

module.exports={app}