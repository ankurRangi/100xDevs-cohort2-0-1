const { Router } = require("express");
const {adminMiddleware, adminValidation} = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../db/jwtSecret");

// Admin Routes
router.post('/signup', adminValidation, async (req, res) => {
    try{
        const username = req.body.username;
        const password = req.body.password;

        const admin = await Admin.findOne({username: username, password: password})
        if (admin){
            res.status(400).json({
                message: "Admin already exists"
            })
        }else{
            await Admin.create({
                username: username,
                password: password
            })
            res.status(201).json({
                message: "Admin added successfully"
            })
        }
    }catch(err){
        res.json({
            message: err.message
        })
    } 
});

router.post('/signin', adminValidation,  async (req, res) => {
    try{
        const username = req.body.username;
        const password = req.body.password;

        const admin = await Admin.findOne({username: username, password: password})
        console.log(admin);
        if(admin){
            const token = jwt.sign({username}, JWT_SECRET);
            res.status(201).json({
                token: token
            })
        }else{
            res.status(403).json({
                message: "Admin does not exist"
            })
        }
    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
   try{
        const title = req.body.title;
        const courseTitle = await Course.findOne({title: title})

        if (courseTitle){
            res.json({
                message: "Course already exists",
                title: title
            })
        }else{
            const course = await Course.create({
                title: title,
                description: req.body.description,
                price: req.body.price,
                imageLink: req.body.imageLink
            })
            course.save();
            res.status(201).json({
                message: "Course added successfully"
            })
        }
   }catch(err){
        res.json({
            message: err.message
        })
   }

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    try{
        const courses = await Course.find();
         res.json({
            courses: courses
         })
    }catch(err){
        res.json({
            message: err.message
        })
    }
});

module.exports = router;