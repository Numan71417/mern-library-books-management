const { default: mongoose } = require('mongoose');
const userModel = require('../models/userModel')

// login callback
const loginController = async (req, res)=>{
    try {
        const {id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error:"not found "})
        }
        const user = await userModel.findById(id)
        if(!user){
            return res.status(404).send("User not found");
        }

        res.status(200).json({
            success : true,
            user,
        });

    } catch (error) {

        res.status(400).json({
            success : false,
            error,
        })
    }
}

// register callback
const RegisterController = async(req , res)=>{
        try {
            const newUser = new userModel(req.body);
            await newUser.save();
            res.status(201).json({
                success : true,
                newUser,
            })

        } catch (error) {
            res.status(400).json({
                success : false,
                error,
            })
        }
}

// getting all details of users
const getUsers = async (req, res)=>{
    const userData = await userModel.find({}).sort({createdAt:-1})
    res.status(200).json(userData)
}

module.exports = { loginController, RegisterController, getUsers }