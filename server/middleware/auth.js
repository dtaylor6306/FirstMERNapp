const jwt = require("jsonwebtoken");

function auth(req, res, next){
    try{
        const token = req.cookies.token;
        
        if(!token) return res.status(401).json({
            errorMessage: "Unauthorized."
        });

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified.user;
        //exit
        next(); //Built into express when used as middleware
    }catch(err){
        console.error(err);
        res.status(401).json({
            errorMessage: "Unauthorized."
        }).send();
    }
}

module.exports = auth;