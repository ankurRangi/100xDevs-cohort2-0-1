const { Router } = require("express");
const {adminMiddleware, adminValidation} = require("../middleware/admin");
const router = Router();
const { Admin } = require("../db");
const jwt = require("jsonwebtoken");
const secret = require("../index");

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

router.post('/signin', adminValidation, async (req, res) => {
    // Implement admin signup logic
    try{
        const username = req.body.username;
        const password = req.body.password;

        const admin = await Admin.findOne({username: username, password: password})
        if(admin){
            const token = jwt.sign({
                username: username,
                // password: password
            }, secret, { expiresIn: '24h'}
        );
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

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;