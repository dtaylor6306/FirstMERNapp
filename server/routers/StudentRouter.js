const router = require("express").Router();

const auth = require("../middleware/auth"); //Checks for cookies
const Student = require("../models/studentModel");

router.post("/", auth, async (req, res) =>{
    try{
        const {firstName, lastName, svnNumber} = req.body;
        const newStudent = new Student({
            firstName, lastName, svnNumber

        });
        savedStudent = await newStudent.save();
        
        res.json(savedStudent);

    }catch(err){
        console.error(err);
        res.status(500).send();
    }
});

router.get("/", auth, async (req, res) =>{
    try{
        const students = await Student.find();
        res.json(students);

    }catch(err){
        console.error(err);
        res.status(500).send();
    }
});


module.exports = router;