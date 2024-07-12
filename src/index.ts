const express = require("express");

const app = express()

app.get("/", (req, res) => {

    res.send("Api funziona")
})

app.listen(3000, () => {
    console.log("Listen to port 3000...")
})

module.exports = app
