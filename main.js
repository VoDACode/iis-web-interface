const express = require('express');
const app = express();

const listController = require("./controllers/list");
const stopController = require("./controllers/stop");
const startController = require("./controllers/start");

app.use('/public', express.static(__dirname + '/public'));

app.use("/api/v1/list", listController);
app.use("/api/v1/stop", stopController);
app.use("/api/v1/start", startController);

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.listen(5555, function() {
    console.log('Example app listening on port 5555!');
});
