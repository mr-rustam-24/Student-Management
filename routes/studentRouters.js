const express = require("express");

const router = express.Router();

router.get("/" , (req,res) =>{
    res.render("home",{
        pageTitle : "home"
    })
});

router.get("/Add-Student" , (req,res) =>{
    res.render("Add-Student" , {
        pageTitle:"Add-Student"
    })
});

const dbms = [];
router.post("/Add-Student" , (req,res) =>{
    dbms.push(req.body);
    res.redirect("/Student")
})



router.get("/Student", (req, res) => {
    res.render("Student", {
        pageTitle: "Student List",
        dbms: dbms
    });
});


router.post("/delete-Student" , (req,res) =>{
    const index = req.body.index;
    dbms.splice(index,1);
    res.redirect("/Student");
})


router.get("/edit-Student/:index", (req, res) => {

    const index = req.params.index;

    const student = dbms[index];

    res.render("Edit-Student", {
        pageTitle: "Edit Student",
        student: student,
        index: index
    });

});

router.post("/update-Student", (req, res) => {

    const index = req.body.index;

    dbms[index] = {
        studentName: req.body.studentName,
        age: req.body.age,
        email: req.body.email,
        course: req.body.course,
        department: req.body.department,
        phone: req.body.phone
    };

    res.redirect("/Student");
});

module.exports = router;