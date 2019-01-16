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

router.get("/:id([0-9]{3,})", function(req, res) {
  var currStudent = students.filter(function(student) {
    if (student.id == req.params.id) {
      return true;
    }
  });
  if (currStudent.length == 1) {
    res.json(currStudent[0]);
  } else {
    res.status(404); //Set status to 404 as movie was not found
    res.json({ message: "Not Found" });
  }
});
//Routes will go here
module.exports = router;
