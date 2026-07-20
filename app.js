const express = require("express");
const path = require("path");

const app = express();
app.use(express.urlencoded({extended:true}));

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Home Route
app.get("/", (req, res) => {
    res.render("home", {
        pageTitle: "Home"
    });
});

app.get("/Add-Student" , (req,res) =>{
    res.render("Add-Student" , {
        pageTitle:"Add-Student"
    })
})

const dbms = [];
app.post("/Add-Student" , (req,res) =>{
    dbms.push(req.body);
    res.redirect("/Student")
})

app.get("/Student", (req, res) => {
    res.render("Student", {
        pageTitle: "Student List",
        dbms: dbms
    });
});


app.post("/delete-Student" , (req,res) =>{
    const index = req.body.index;
    dbms.splice(index,1);
    res.redirect("/Student");
})


app.get("/edit-Student/:index", (req, res) => {

    const index = req.params.index;

    const student = dbms[index];

    res.render("Edit-Student", {
        pageTitle: "Edit Student",
        student: student,
        index: index
    });

});
// Server
const PORT = 3002;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server Running on http://0.0.0.0:${PORT}`);
});