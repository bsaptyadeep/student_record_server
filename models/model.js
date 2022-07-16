const mongoose = require("mongoose");
const Joi = require("joi");

const studentSchema = new mongoose.Schema({
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    secondName: { type: String, required: true },
});

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
