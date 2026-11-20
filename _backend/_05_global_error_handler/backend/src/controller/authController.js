const UserModel = require("../model/user.model");
const AppError = require("../utils/AppError");
const asyncHandler = require("../utils/asyncHandler");


const RegisterController = asyncHandler(async (req,res)=>{        
        let {name,email,password} = req.body
        
        if (!email || !password)  throw new AppError("all field are required")
        
        const isExist = await UserModel.findOne({email});

        if (isExist) throw new AppError("Email is already registerd")

        const user = await UserModel.create({name,email,password})
        

        res.status(200).json({
            user
        })
})


const LoginController = asyncHandler(async(req,res)=>{
        let {name,email,password} = req.body
        
        if (!email || !password) throw new AppError("all field are required",400)
        
        const user = await UserModel.findOne({email});

        if (!user) throw new AppError("Invalid creadentails ",400)




        res.status(200).json({
            message:"Login successful",
            user
        })

})





module.exports = {
    RegisterController,
    LoginController
}