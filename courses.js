var express = require("express");
var router = express.Router();
var courses = [
  { id: 101, name: "ICT", Description: "Basics of computer Science" },
  { id: 102, name: "Finnish", Description: "Language & culture" },
  { id: 103, name: "RESTfulAPI", Description: "API architecture" }
];
router.get("/", function(req, res) {
  res.json(courses);
});

router.get("/:id([0-9]{3,})", function(req, res) {
  res.json(courses);
  var currCourse = courses.filter(function(course) {
    if (course.id == req.params.id) {
      return true;
    }
  });
  if (currCourse.length == 1) {
    res.json(currCourse[0]);
  } else {
    res.status(404); //Set status to 404 was not found
    res.json({ message: "Not Found" });
  }
});

router.post("/", function(req, res) {
  //Check if all fields are provided and are valid:

  var newId = courses[courses.length - 1].id + 1;
  courses.push({
    id: newId,
    name: req.body.name,
    class: req.body.class,
    Description: req.body.Description
  });
  res.json({
    message: "New course created.",
    location: "/courses/" + newId
  });
});

router.put("/:id", function(req, res) {
  var updateIndex = courses
    .map(function(course) {
      return course.id;
    })
    .indexOf(parseInt(req.params.id));

  if (updateIndex === -1) {
    //student not found, create new
    courses.push({
      id: req.params.id,
      name: req.body.name,
      class: req.body.year,
      Address: req.body.Address
    });
    res.json({
      message: "New student created.",
      location: "/students/" + req.params.id
    });
  } else {
    //Update existing student
    courses[updateIndex] = {
      id: req.params.id,
      name: req.body.name,
      class: req.body.class,
      Description: req.body.Description
    };
    res.json({
      message: "course id " + req.params.id + " updated.",
      location: "/courses/" + req.params.id
    });
  }
});

//Delete
router.delete("/:id", (req, res) => {
  let finder = courses.findIndex(x => x.id == req.params.id);
  finder >= 0
    ? (courses.splice(finder, 1), res.send("Removal Complete"))
    : res.send("Record Not Found");
});
//Routes will go here
module.exports = router;
