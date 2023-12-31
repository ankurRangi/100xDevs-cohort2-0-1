const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../index");
const zod = require("zod");

const userSchema = zod.object({
    username: zod.string().email({ message: "Invalid email address" }),
    password: zod.string().min(8)
});

function userMiddleware(req, res, next) {
    const token = req.headers.authorization;
    const words = auth.split(" ");
    const jwtToken = words[1];
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);

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
    if(response.success){
        // console.log(response)
        next();
    }else{
        res.status(403).json({
            message: "Invalid data format",
            response: response
        })
    }
}

module.exports = {
    userMiddleware, 
    userValidation
};