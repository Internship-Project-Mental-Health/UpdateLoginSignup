// const express = require('express');
// const router = express.Router();

// const User = require('./../models/User')

// const bcrypt = require('bcrypt')

// // Signup
// router.post('/signup',(req, res) =>{
//     let{name, email, password, dateofbirth} = req.body;
//     name = name.trim();
//     email = email.trim();
//     password = password.trim();
//     dateofbirth = dateofbirth.trim();

//     if(name == "" || email == "" || password == "" || dateofbirth == ""){
//         res.json({
//             status :  "FAILED",
//             message : "Empty input field!"
//         });
//     }else if (!/^[a-zA-z]*$/.test(name)){
//         res.json({
//             status : "FAILED",
//             message : "Invalid name entered"
//         })
//     } else if(!/^[\w-\.] + @([\w-]+\.) + [\w-]{2,4}$/.test(email)){
//         res.json({
//             status : "FAILED",
//             message : "Invalid email entered"
//         })
//     } else if(!new Date(dateofbirth).getTime()){
//         res.json({
//             status : "FAILED",
//             message : "Invalid date of birth entered"
//         })
//     } else if(password.length < 8){
//         res.json({
//             status : "FAILED",
//             message : "Password is too short"
//         })
//     } else{
//         //checking for existence
//         User.find({email}).then(result => {
//             if(result.length){
//                 res.json({
//                     status : "FAILED",
//                     message : "Invalid email entered"
//                 })
//             }
//         }).catch(err => {
//             console.log(err);
//             res.json({
//                 status : "FAILED",
//                 message : "User already Exists"
//             })
//         })
//     }
// })

// //SignIn
// router.post('/signin',(req, res) =>{

// })

// module.exports = router;