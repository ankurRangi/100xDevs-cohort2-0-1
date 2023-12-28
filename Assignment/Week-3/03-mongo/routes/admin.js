const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const  router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    if (Admin.findOne({username: req.body.username})){
        res.status(400).json({
            msg: "Admin already exists"
        })
    }
    const admin = new Admin({
            username: req.body.username,
            password: req.body.password
            });
    admin.save();
    res.status(200).json({
        message: 'Admin created successfully'
    });
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    if (Admin.findOne({username: req.body.username})){
        res.status(400).json({
            msg: "Admin already exists"
        })
    }

});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;