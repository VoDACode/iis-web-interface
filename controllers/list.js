const express = require('express');
const router = express.Router();
const iis = require("iis");

router.get("/", (req, res) => {
    iis.list("SITE", (err,mapped) => {
        res.end(JSON.stringify(mapped));
    });
});

module.exports = router;
