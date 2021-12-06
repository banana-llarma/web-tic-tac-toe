const { Router } = require("express")

const homePage = Router()
  .get("/", (req, res) => {
    res.send("homePage hahahahahhahaha")
  })

module.exports = homePage
