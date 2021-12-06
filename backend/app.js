const express = require('express')
const app = express()

const router = require("./router/router")
app.use(express.json()) // this before the routes
app.use("/", router.homePage)


module.exports = app