let express = require("express");
const conectDB = require("./config/conectDB");
const User = require("./models/user");
let app = express();
require("dotenv").config({ path: "./config/.env" });
conectDB();
app.use(express.json());
//crud
//post
app.post("/user/post", async (req, res) => {
  let { name, email, number } = req.body;
  try {
    let newUser = new User({
      name,
      email,
      number,
    });
    await newUser.save();
    res.send(newUser);
  } catch (error) {
    console.log(error.message);
  }
});

//get All users
app.get("/user/get",async(req,res)=>{
    try {
        let users= await User.find()
        res.send(users)
    } catch (error) {
        console.log(error.message)
    }
})

//get one User by Id
app.get("/user/get/:id",async(req,res)=>{

    try {
        let theUser=await User.findById(req.params.id)
        res.send(theUser)
    } catch (error) {
        console.log(error.message)
    }
});
//delete
app.delete("/user/delete/:id",async(req,res)=>{
    try {
        let dletedUser=await User.findByIdAndDelete(req.params.id)
        res.send("user is deleted")
    } catch (error) {
        console.log(error.message)
    }
});
//edit
app.put("/user/put/:id",async(req,res)=>{
    try {
        let editeduser=await User.findByIdAndUpdate(req.params.id,{...req.body},{new:true})
        res.send(editeduser)
    } catch (error) {
        console.log(error.message)
    }
})

let PORT = process.env.PORT || 5000;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log("server is runing successfully")
);
