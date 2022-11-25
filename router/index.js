const express = require("express")
const router = express.Router()

router.use(express.static("public"))
router.use('/css', express.static(__dirname + '/public/css/'))
router.use('/js', express.static(__dirname + '/public/js/'))

router.use("/home", require("./home"))
router.use("/pagina", require("./pagini"))

module.exports = router