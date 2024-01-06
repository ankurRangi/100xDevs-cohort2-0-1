const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");

// const JWT_SECRET = "ankur_server";

app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// exports.JWT_SECRET = JWT_SECRET;
// module.exports = JWT_SECRET;
