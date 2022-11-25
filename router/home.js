const express = require("express")
const router = express.Router()

router.get("/", async (req, res) => {
    res.render("../views/home.ejs")
    require("../localdata/function")()
})

module.exports = router