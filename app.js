const express = require("express");
const path = require("path");
const studentRouter = require("./routes/studentRouters");
const app = express();
app.use(express.urlencoded({extended:true}));

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// // Home Route
// app.get("/", (req, res) => {
//     res.render("home", {
//         pageTitle: "Home"
//     });
// });

app.use("/" , studentRouter);


// app.get("/Add-Student" , (req,res) =>{
//     res.render("Add-Student" , {
//         pageTitle:"Add-Student"
//     })
// })

// const dbms = [];
// app.post("/Add-Student" , (req,res) =>{
//     dbms.push(req.body);
//     res.redirect("/Student")
// })

// app.get("/Student", (req, res) => {
//     res.render("Student", {
//         pageTitle: "Student List",
//         dbms: dbms
//     });
// });


// app.post("/delete-Student" , (req,res) =>{
//     const index = req.body.index;
//     dbms.splice(index,1);
//     res.redirect("/Student");
// })


// app.get("/edit-Student/:index", (req, res) => {

//     const index = req.params.index;

//     const student = dbms[index];

//     res.render("Edit-Student", {
//         pageTitle: "Edit Student",
//         student: student,
//         index: index
//     });

// });

// app.post("/update-Student", (req, res) => {

//     const index = req.body.index;

//     dbms[index] = {
//         studentName: req.body.studentName,
//         age: req.body.age,
//         email: req.body.email,
//         course: req.body.course,
//         department: req.body.department,
//         phone: req.body.phone
//     };

//     res.redirect("/Student");
// });
// Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});