

const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

    studentName: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    course: {
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    }

});


module.exports = mongoose.model("student", studentSchema);