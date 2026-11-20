const Imagekit = require("imagekit")

const storageInstance = new Imagekit({
    privateKey:process.env.IK_PRIVATE_KEY,
    publicKey:process.env.IK_PUBLIC_KEY,
    urlEndpoint:process.env.IK_URL_ENDPOINT

})

const sendFilesToIK = async (file,fileName)=>{
    return await storageInstance.upload({file,fileName});
}

module.exports = sendFilesToIK;
