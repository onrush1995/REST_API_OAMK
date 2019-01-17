var express = require("express");
var router = express.Router();
var grades = [
  { id: 101, name: "ICT", Description: "Basics of computer Science", grade: 5 },
  { id: 102, name: "Finnish", Description: "Language & culture", grade: 4 },
  { id: 103, name: "RESTfulAPI", Description: "API architecture", grade: 5 }
];
router.get("/", function(req, res) {
  res.json(grades);
});

router.post("/", function(req, res) {
  //Check if all fields are provided and are valid:

  var newId = grades[grades.length - 1].id + 1;
  grades.push({
    id: newId,
    name: req.body.name,
    class: req.body.class,
    Description: req.body.Description,
    grade: req.body.grade
  });
  res.json({
    message: "New course grade created.",
    location: "/grades/" + newId
  });
});

router.put("/:id", function(req, res) {
  var updateIndex = grades
    .map(function(grade) {
      return grade.id;
    })
    .indexOf(parseInt(req.params.id));

  if (updateIndex === -1) {
    //student not found, create new
    grades.push({
      id: req.params.id,
      name: req.body.name,
      class: req.body.class,
      Description: req.body.Description,
      grade: req.body.grade
    });
    res.json({
      message: "New grade created.",
      location: "/grades/" + req.params.id
    });
  } else {
    //Update existing student
    grades[updateIndex] = {
      id: req.params.id,
      name: req.body.name,
      class: req.body.class,
      Description: req.body.Description,
      grade: req.body.grade
    };
    res.json({
      message: " Grade" + req.params.id + " updated.",
      location: "/grades/" + req.params.id
    });
  }
});

router.delete("/:id", function(req, res) {
  var removeIndex = grades
    .map(function(grade) {
      return grade.id;
    })
    .indexOf(req.params.id); //Gets us the index of course with given id.

  if (removeIndex === -1) {
    res.json({ message: "Not found" });
  } else {
    grades.splice(removeIndex, 1);
    res.send({ message: "Grade " + req.params.id + " removed." });
  }
});
//Routes will go here
module.exports = router;
