const student = require("../models/studentModel")

exports.getHome = (req,res) =>{
    res.render("home",{
        pageTitle : "home"
    })
}

exports.getAddStudent = (req,res) =>{
    res.render("Add-Student" , {
        pageTitle:"Add-Student"
    })
};

exports.addStudentpost = async(req,res)=>{

    try{

        await student.create(req.body);

        res.redirect("/Student");

    }catch(error){

        res.send(error.message);

    }

};

exports.getStudent =  async (req, res) => {
    const students = await student.find();
    res.render("Student", {
        pageTitle: "Student List",
        dbms: students
    });
};


exports.deleteStudent = async (req,res) =>{
    const id = req.body.id;
    await student.findByIdAndDelete(id)
    res.redirect("/Student");
};

exports.getEditStudentindex = async (req, res) => {

    console.log("req.params =", req.params);

    const id = req.params.id;
    console.log("id =", id);

    const oneStudent = await student.findById(id);

    res.render("Edit-Student", {
        pageTitle: "Edit Student",
        student: oneStudent,
    });
};


exports.updateStudent = async(req, res) => {

    const id = req.body.id;
console.log(id)
    await student.findByIdAndUpdate(id,{
        studentName: req.body.studentName,
        age: req.body.age,
        email: req.body.email,
        course: req.body.course,
        department: req.body.department,
        phone: req.body.phone
    });

    res.redirect("/Student");
};