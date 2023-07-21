const express = require("express")
const { redirectToMainURL } = require("../controllers/redirect")

const router = express.Router()

router.get("/:shortId", redirectToMainURL)

module.exports = router
