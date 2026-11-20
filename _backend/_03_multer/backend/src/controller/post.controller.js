// const sendFilesToIK = require("../config/imagekit");


const createPostController = async (req,res) =>{
    try {
        let media = req.body;
        console.log(req.file);
        

        // let uplodedImg = await sendFilesToIK(media.buffer,media.originalname)

        // console.log(uplodedImg);

        res.send("ok")
    } catch (error) {
        return res.status(500).json({
        success: false,
        message: "Internal server error",
    });
    }
}

module.exports ={
    createPostController
}