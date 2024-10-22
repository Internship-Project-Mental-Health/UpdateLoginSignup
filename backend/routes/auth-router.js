const express = require('express');
const router = express.Router();
const {register,login} = require("../controllers/auth"); // Ensure correct path
const signupSchema = require('../validators/auth-validators');
const validate = require('../middlewares/validate-middlewares')
router.route("/register").post(validate(signupSchema),register);
router.route("/login").post(login);
module.exports = router;
