const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const mongoose = require('mongoose');

// User Routes
router.post('/signup',  async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({username, password});
    if(user){
        res.json({
            message: "User already exists"
        })
    }else{
        await User.create({username, password})
        res.json({
            message: "User created successfully"
        })
    }
    
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    try{
        res.json({
            courses: await Course.find()
        })
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }  
    });
    res.json({ 
        message: 'Course purchased successfully'
    })
    
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username
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