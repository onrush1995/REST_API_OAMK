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
router.get("/", function(req, res) {
  res.json(students);
});
router.get("/:id([0-9]{3,})", function(req, res) {
  res.json(students);
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
