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
var courses = require("./courses.js");
var grades = require("./grades.js");

//Use the Router on the sub route /students
app.use("/students", students);
app.use("/courses", courses);
app.use("/grades", grades);
//app.use(express.static(__dirname + "/public"));

app.listen(5000);
