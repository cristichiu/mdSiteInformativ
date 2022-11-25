const express = require("express")
const router = express.Router()

router.get("/traditii", async (req, res) => { res.render("../views/pagini/traditii.ejs") })
router.get("/sarbatori", async (req, res) => { res.render("../views/pagini/sarbatori.ejs") })
router.get("/istoric", async (req, res) => { res.render("../views/pagini/istoric.ejs") })
router.get("/curiozitati", async (req, res) => { res.render("../views/pagini/curiozitati.ejs") })
router.get("/clasamente", async (req, res) => { res.render("../views/pagini/clasamente.ejs") })

module.exports = router