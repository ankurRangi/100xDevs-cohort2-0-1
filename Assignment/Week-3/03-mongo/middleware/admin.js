// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const user = req.headers.username;
    const pass = req.headers.password;

    const admin = Admin.findOne({username: user})
    if (admin){
        if( admin.password == pass){
            next();
        }
        else{
            res.status(400).json({
                msg: "Credentials did not match"
            })
        }
    }else{
        res.status(400).json({
            msg: "Admin done not exist"
        })
    }
}

module.exports = adminMiddleware;