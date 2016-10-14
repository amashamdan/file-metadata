var express = require("express");
var multer = require("multer");
/* A local folder (uploads will be created) */
var upload = multer({dest: "uploads/"});
var app = express();

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.post("/upload", upload.single("uploadedFile"), function(req, res, next) {
	console.log(req.file.size);
	res.send({"Size in bytes": req.file.size, "Size in KB": Number((req.file.size/1024).toFixed(2))});
	res.end();
})

// port 3000 used for localhost during development.
var port = Number(process.env.PORT || 3000)
app.listen(port);