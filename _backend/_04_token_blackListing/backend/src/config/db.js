const { default: mongoose, connect } = require("mongoose")



const connetToDb =async () => {
    try {
        await connect(process.env.MONGO_URI)
        console.log("✅  Data base is connected");

    } catch (error) {
        console.log("❌ DB NOT CONNECTED ❌");
        
    }
        
}

module.exports = connetToDb