const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.con

const app = express();
app.use(express.json());
// mongodb+srv://ankurRangi:xRm16lhjh9HTNcXW@clusterauth01.rucasuh.mongodb.net/
const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
//   const user = ALL_USERS.find(usr => usr.username === username);
//   const pass = ALL_USERS.find(usr => usr.password === password);
//   if (typeof user !== 'undefined' && typeof pass !== 'undefined'){
//     return true;
//   }
//   return false;

    let userExists = false;
    for (let i = 0; i<ALL_USERS.length; i++) {
        if (ALL_USERS[i].username == username && ALL_USERS[i].password == password) {
        userExists = true;
        }
    }
    return userExists;
}

app.get('/', (req, res) => {
    res.status(200).send("Working Fine");
})


app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username, password: password }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, jwtPassword);
  console.log(decoded);
  const username = decoded.username;
  // return a list of users other than this username
  res.json({
    user: ALL_USERS.filter(function(value){
      if (value.username === username){
        return false
      }
      else {
        return true;
      }
    })

  });

});

app.listen(3000)