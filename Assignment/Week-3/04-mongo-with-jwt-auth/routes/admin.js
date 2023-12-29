const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const zod = require("zod");

// Admin Routes
router.post('/signup', async (req, res) => {
    
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;