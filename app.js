const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", function (request, response) {
    response.render("index");
});

module.exports = app;