var express = require("express");
var app = express();

const PORT = process.env.PORT || 8888
app.use(express.static("public"));
app.set("views", "views");
app.set("view engine", "ejs");


app.listen(PORT, function() {
	console.log("Up and running")
})