var express = require("express");
var bodyParser = require("body-parser");

var cookieParser = require("cookie-parser");
var multer = require("multer");
var upload = multer();

var app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());

//Require the Router we defined in students.js
var students = require("./students.js");

//Use the Router on the sub route /students
app.use("/students", students);

app.listen(5000);
