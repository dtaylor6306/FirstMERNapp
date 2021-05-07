const router = require("express").Router(); //sets up router built into express
const User = require("../models/userModel");
router.post("/", async (req, res)=>{
    try{
        const {email, password, passwordVerify} = req.body;

        //validation
        //Missing field
        if(!email || !password || !passwordVerify){
            return res.status(400).json(
            {errorMessage: "Please enter all required fields."}
            );
        }
        //Password too short
        if(password.length < 6){
            return res.status(400).json(
            {errorMessage: "Please enter a password with at least 6 characters."}
            );
        }
        //Passwords don't match
        if(password !== passwordVerify){
            return res.status(400).json(
            {errorMessage: "Passwords do not match!"}
            );
        
        }
        const existingUser = await User.findOne({email});
        //User already exists
        if(existingUser){
            return res.status(400).json(
            {errorMessage: "An account with this email already exits."}
            );
        
        }

    }
    catch(err){
        console.error(err);
        res.status(500).send;
    }
});

module.exports = router;