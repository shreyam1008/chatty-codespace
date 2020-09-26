const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.send("server is hard and up")
})

module.exports = router
