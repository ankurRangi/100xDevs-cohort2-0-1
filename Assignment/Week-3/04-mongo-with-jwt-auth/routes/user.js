const { Router } = require("express");
const router = Router();
const {userMiddleware, userValidation} = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../db/jwtSecret");


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

router.post('/signin', userValidation, async (req, res) => {
    // Implement admin signup logic
    try{
        const username = req.body.username;
        const password = req.body.password;

        const user = await User.findOne({username: username, password: password})
        if(user){
            const token = jwt.sign({username}, JWT_SECRET)
            res.status(201).json({
                token: token
            })
        }else{
            res.status(403).json({
                message: "User does not exist"
            })
        }
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    try{
        res.json({
            courses: await Course.find()
        })
    }catch(err){
        res.json({
            message: err.message
        })
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    try{
        const id = req.params.courseId;
        const course = await Course.findById({_id: id})
        if(course){
            const user = await User.findOneAndUpdate(
                {username: req.username}, 
                { "$push" : 
                    { purchasedCourses: id}
                }
            )
            user.save();
            res.json({
                message: "Course purchased successfully",
                course_title: course.title
            })
        }else{
            res.json({
                message: "Course doest not exist with that ID",
                id: id
            })
        }
        
    }catch(err){
        res.json({
            message: err.message
        })
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username
    const user = await User.findOne({username: username})

    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })
    res.json({
        courses: courses
    })

});

module.exports = router