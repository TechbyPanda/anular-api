const express = require('express')
const router = express.Router();
const Admin = require('../model/admin.model')

router.post('/signin',(req,res)=>{
    Admin.findOne(req.body)
    .then(result=>{
        if(result){
            return res.status(200).json(result);
        }
        else{
            return res.status(404).json({message:'amdin not found'})
        }
    }).catch(err=>{
        console.log(err);
        return res.status(500).json({message: 'something went wrong'});
    })
})

module.exports = router;