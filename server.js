//requiring express module
var express = require("express");
//requiring body-parser module
// var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var port = process.env.PORT || 3000;

//body parser
app.use(express.json());
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("app/public"));

//routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(port, () => console.log("Listening on port %s", port));


