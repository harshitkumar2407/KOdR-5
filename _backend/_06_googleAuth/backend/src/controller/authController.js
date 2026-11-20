const UserModel = require("../model/user.model")


const RegisterController = async(req,res) =>{
    try {
        let {name,email,password} = req.body
        
        if (!email || !password) {
            res.status(401).json({
                message:"all field are required"
            })
        }
        
        const isExist = await UserModel.findOne({email});

        if (isExist) {
            res.status(401).json({
                message:"Email already registerd"
            })
        }

        const user = await UserModel.create({name,email,password})
        

        res.status(200).json({
            user
        })

    } catch (error) {
        res.status(500).json({
            message:"Internal server error"
        })
    }
}


const LoginController = async(req,res) =>{
    try {
        let {name,email,password} = req.body
        
        if (!email || !password) {
            res.status(401).json({
                message:"all field are required"
            })
        }
        
        const user = await UserModel.findOne({email});

        if (!user) {
            res.status(401).json({
                message:"Invalid Creadentials"
            })
        }




        res.status(200).json({
            message:"Login successful",
            user
        })

    } catch (error) {
        res.status(500).json({
            message:"Internal server error"
        })
    }
}




module.exports = {
    RegisterController,
    LoginController
}