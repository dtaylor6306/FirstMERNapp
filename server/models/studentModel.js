const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    firstName: {type: String, require: true},
    lastName: {type: String, require: true},
    svnNumber: {type: Number, require:true}
})

const Student = mongoose.model("student", studentSchema);

module.exports = Student;