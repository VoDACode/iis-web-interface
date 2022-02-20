const express = require('express');
const router = express.Router();
const iis = require("iis");

router.post("/", (req, res) => {
    iis.startSite(req.query.n, (msg) => {
        res.end(JSON.stringify(msg));
    })
});

module.exports = router;
