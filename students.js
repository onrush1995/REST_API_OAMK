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
router.delete("/:id", function(req, res) {
  var removeIndex = students
    .map(function(student) {
      return student.id;
    })
    .indexOf(req.params.id); //Gets us the index of student with given id.

  if (removeIndex === -1) {
    res.json({ message: "Not found" });
  } else {
    students.splice(removeIndex, 1);
    res.send({ message: "Student id " + req.params.id + " removed." });
  }
});

//Routes will go here
module.exports = router;
