const express = require("express"); //import express

const router = express.Router();

router.get("/", (req,res)=>{
    res.send({data: "Here is your data."});
});

router.post("/", (req,res)=>{
    res.send({data: "User created"});
});

router.put("/", (req,res)=>{
    res.send({data: "data updated"});
});

router.delete("/", (req, res)=>{
    res.send({data: "comment deleted"});
});

module.exports = router;