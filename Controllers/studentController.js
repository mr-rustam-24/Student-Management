const dbms = [];

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

exports.addStudentpost =  (req,res) =>{
    dbms.push(req.body);
    res.redirect("/Student")
};

exports.getStudent =  (req, res) => {
    res.render("Student", {
        pageTitle: "Student List",
        dbms: dbms
    });
};


exports.deleteStudent = (req,res) =>{
    const index = req.body.index;
    dbms.splice(index,1);
    res.redirect("/Student");
};

exports.getEditStudentindex =  (req, res) => {

    const index = req.params.index;

    const student = dbms[index];

    res.render("Edit-Student", {
        pageTitle: "Edit Student",
        student: student,
        index: index
    });

};


exports.updateStudent = (req, res) => {

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
};