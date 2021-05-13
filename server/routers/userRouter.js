const router = require("express").Router(); //sets up router built into express
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register
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
        
        // Hash the password
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        // now save the user to db

        const newUser = new User({
            email,passwordHash
        });

        const savedUser = await newUser.save();

        // sign the token

        const token =  jwt.sign({
            user: savedUser._id
        }, 
        process.env.JWT_SECRET);
        
        // send the token via HTTP cookie

        res.cookie("token", token, {
            httpOnly: true
        }).send();

    }catch(err){
        console.error(err);
        res.status(500).send();
    }
});

// Log in

router.post("/login", async (req, res) =>{
    try{
        const {email, password} = req.body;

        //validate

        if(!email || !password){
            return res.status(400).json({
                errorMessage: "Please enter all fields."
            })
        }
        const existingUser = await User.findOne({email});
        
        if(!existingUser){
            return res.status(401).json({
                errorMessage: "Invalid email or password."
            });
        }
        const passwordCorrect = await bcrypt.compare(password, existingUser.passwordHash);
        
        if(!passwordCorrect){
            return res.status(401).json({
                errorMessage: "Invalid email or password."
            });
        }

        //sign a token
        const token = jwt.sign({
            user: existingUser._id
        },
         process.env.JWT_SECRET
        );

        //send token in HTTP only cookie

        res.cookie("token",token,{
            httpOnly:true,
        }).send();

    }catch(err){
        console.error(err);
        res.status(500).send();
    }

});

//logout

router.get("/logout",(req, res) =>{
    res.cookie("token", "",{
        httpOnly:true,
        expires: new Date(0)    //clears the cookie because its expired
    }).send();
})

router.get("/loggedIn",(req,res)=>{
    try{
        
        const token = req.cookies.token;
        if(!token) return res.json(false); //No token not logged in
        
        jwt.verify(token, process.env.JWT_SECRET); //If any error not logged in

        res.send(true); //Else logged in should be true

    }catch(err){
        res.json(false);
    }
});



module.exports = router;