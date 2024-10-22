const User = require('../models/User/User');
const bcrypt = require("bcrypt");


const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ msg: "Email already exists" });
        }

        // hash th password
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);


        const userCreated = await User.create({ 
            username,
            email,
            phone,
            password,
        });

        res.status(201).json({ 
            msg: "Signup succesfully", 
            token : await userCreated.generateToken(), userId:userCreated._id.toString()
        }); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal server error" }); 
    }
};


// LOGIN logic


const login = async(req, res)=>{
    try{
        const {email, password}= req.body;
        const userExist = await User.findOne({email});
        console.log(userExist)
        if(!userExist){
            return res.status(400).json({message : "Invalid Credential"});
        }
        const user = await bcrypt.compare(password, userExist.password);
        if(user){
            res.status(200).json({ 
                msg: "Login succesfully", 
                token : await userExist.generateToken(), userId:userExist._id.toString()
            }); 
        }else{
            res.status(401).json({message:"Invalid Email or Password"});
        }
    }catch(error){
        res.status(500).json({ msg: "Internal server error" });
    }

}

module.exports = {register,login};

