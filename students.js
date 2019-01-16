var express = require("express");
var router = express.Router();
var students = [
  {
    id: 101,
    name: "Lasse",
    class: "DIN16SP",
    Address: "Kajaanintie 34,90130,OULU"
  },
  {
    id: 102,
    name: "Pekka",
    class: "DIN17SP",
    Address: "Kajaanintie 35,90130,OULU"
  },
  {
    id: 103,
    name: "Kari",
    class: "DIN18SP",
    Address: "Kajaanintie 14,90130,OULU"
  },
  {
    id: 104,
    name: "Susana",
    class: "DIN19SP",
    Address: "Kajaanintie 08,90130,OULU"
  }
];
router.post("/", function(req, res) {
  //Check if all fields are provided and are valid:

  var newId = students[students.length - 1].id + 1;
  students.push({
    id: newId,
    name: req.body.name,
    class: req.body.class,
    Address: req.body.Address
  });
  res.json({
    message: "New student created.",
    location: "/students/" + newId
  });
});

//Routes will go here
module.exports = router;
