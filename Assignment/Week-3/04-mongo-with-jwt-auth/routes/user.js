const { Router } = require("express");
const router = Router();
const {userMiddleware, userValidation} = require("../middleware/user");
const { User } = require("../db");


// User Routes
router.post('/signup', userValidation, async (req, res) => {
    // Implement user signup logic
    try{
        const username = req.body.username;
        const password = req.body.password;
        
        const user = await User.findOne({username: username, password: password});
        if (user){
            res.status(400).json({
                message: "User already exists"
            })
        }else{
            await User.create({
                username: username,
                password: password
            })
            res.status(201).json({
                message: "User added successfully"
            })
        }
    }catch(err){
        res.json({
            message: err.message
        })
    }
    
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router