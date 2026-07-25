const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const studentRouter = require("./routes/studentRouters");
const app = express();

mongoose.connect("mongodb+srv://rustam-009:Rustam@cluster0.vvrfbkb.mongodb.net/?appName=Cluster0")
.then(() => console.log("mongoDb Connected Successufully")).catch((error) => console.log(error))
app.use(express.urlencoded({extended:true}));

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/" , studentRouter);



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});