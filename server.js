var express = require("express");
var app = express();

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html");
});

// port 3000 used for localhost during development.
var port = Number(process.env.PORT || 3000)
app.listen(port);