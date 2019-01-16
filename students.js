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
router.put("/:id", function(req, res) {
  var updateIndex = students
    .map(function(student) {
      return student.id;
    })
    .indexOf(parseInt(req.params.id));

  if (updateIndex === -1) {
    //student not found, create new
    students.push({
      id: req.params.id,
      name: req.body.name,
      class: req.body.year,
      Address: req.body.rating
    });
    res.json({
      message: "New student created.",
      location: "/students/" + req.params.id
    });
  } else {
    //Update existing student
    students[updateIndex] = {
      id: req.params.id,
      name: req.body.name,
      class: req.body.year,
      Address: req.body.rating
    };
    res.json({
      message: "Student id " + req.params.id + " updated.",
      location: "/students/" + req.params.id
    });
  }
});

//Routes will go here
module.exports = router;
