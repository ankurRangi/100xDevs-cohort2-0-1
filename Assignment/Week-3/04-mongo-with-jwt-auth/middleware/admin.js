const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../db/jwtSecret");
const zod = require("zod");

const adminSchema = zod.object({
    username: zod.string().email({message: "Invalid email address"}),
    password: zod.string().min(8)
})

// Middleware for handling auth
function adminMiddleware(req, res, next) {

    const token = req.headers.authorization;
    const words = token.split(" ");
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

function adminValidation(req, res, next){
    const response = adminSchema.safeParse(req.body);
    if(response.success){
        next();
    }else(
        res.status(403).json({
            message: "Invalid data format",
            response: response.data
        })
    )
}

module.exports = {
    adminMiddleware,
    adminValidation
};