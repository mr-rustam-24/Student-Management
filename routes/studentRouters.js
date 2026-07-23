const express = require("express");

const router = express.Router();

const studentController = require("../Controllers/studentController");

router.get("/" , studentController.getHome);

router.get("/Add-Student" , studentController.getAddStudent);

router.post("/Add-Student" , studentController.addStudentpost);


router.get("/Student", studentController.getStudent);


router.post("/delete-Student" , studentController.deleteStudent);


router.get("/edit-Student/:index",studentController.getEditStudentindex);

router.post("/update-Student", studentController.updateStudent);

module.exports = router;