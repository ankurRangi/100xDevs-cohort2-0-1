const jwt = require("jsonwebtoken");
const secret = require("../index");
const zod = require("zod");

const userSchema = zod.object({
    email: zod.string().email({ message: "Invalid email address" }),
    password: zod.string().min(8)
});

function userMiddleware(req, res, next) {
    const token = req.headers.authorization;
    const words = auth.split(" ");
    const jwtToken = words[1];
    const decodedValue = jwt.verify(jwtToken, secret);

    if(decodedValue.username){
        next();
    }else{
        res.status(403).json({
            message: "You are not authenticated"
        })
    }
}

function userValidation(req, res, next){
    const response = userSchema.safeParse(req.body)
    if(!response.success){
        next();
    }else{
        res.status(403).json({
            message: "Invalid data format"
        })
    }
}

module.exports = {
    userMiddleware, 
    userValidation
};