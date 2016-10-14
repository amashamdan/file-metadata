var express = require("express");
/* multer package needed to upload files. */
var multer = require("multer");
/* A local folder (uploads) will be created to save uploads. */
var upload = multer({dest: "uploads/"});
var app = express();

/* get request on root send back index.html which contains the form to upload the file. */
app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html");
});

/* post request uses multer to the uploaded file to the request. uploadedFile is the same as name attribute of the input field in index.html */
app.post("/upload", upload.single("uploadedFile"), function(req, res, next) {
	/* The response json consists of the file size in both bytes and kilobytes. */
	res.send({"Size in bytes": req.file.size, "Size in KB": Number((req.file.size/1024).toFixed(2))});
	res.end();
})

// port 3000 used for localhost during development.
var port = Number(process.env.PORT || 3000)
app.listen(port);