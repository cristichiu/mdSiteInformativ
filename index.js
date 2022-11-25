const express = require("express")
const app = express()
const router = require("./router/index")

app.set('view engine', 'ejs')
app.listen(5000)

app.use("/", router)

console.log("Totul a pornit si merge bine!!!")