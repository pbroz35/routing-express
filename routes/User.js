//import the express library
const express = require("express");

//router object
const router = express.Router();

router.get("/", (req, res)=>{
    res.send({data : "Here is your data"});
});

router.post("/", (req,res)=>{
    res.send({data: "User created"});
});

router.put("/", (req,res)=>{
    res.send({data: "User updated"});
});

router.delete("/", (req, res)=>{
    res.send({data: "user deleted :("});
});

module.exports = router