const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const { ConnectionStates } = require("mongoose");
const  router = Router();

router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    Admin.findOne({username: username, password: password})
    .then( (value) => {
        if (value){
            res.json({
                msg: "Admin already exists"
            })
        }
    })

    await Admin.create({
            username: username,
            password: password
    })

    res.status(200).json({
        message: 'Admin created successfully'
    });
});

router.post('/courses', adminMiddleware, async (req, res) => {
    try{
        let isCourse = await Course.findOne({title: req.body.title})
        if (isCourse){
            console.log(isCourse);
            res.status(403).json({
                message: "Course already exists",
                courseId:  isCourse._id
            })
        }else{
            isCourse = await Course.create({
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                imageLink: req.body.imageLink,
            })
            res.status(201).json({ 
                message: 'Course created successfully', 
                courseId: isCourse._id
            })
        }
    }catch(error){
        res.status(500).json({ 
            message: error.message, 
        });
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
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

module.exports = router;