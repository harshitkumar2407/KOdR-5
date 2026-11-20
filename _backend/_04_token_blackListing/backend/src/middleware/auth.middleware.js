const jwt = require("jsonwebtoken");
const cacheInstance = require("../config/redis");
const userModel = require("../controller/model/auth.model");

const authenticate = async (req, res, next) => {
    try {
        // const token = req.cookies.tala;
        // if (!token) {
        //     return res.status(401).json({ message: "Authentication token is required" });
        // }

        // const isBlacklisted = await cacheInstance.get(token);
        // if (isBlacklisted) {
        //     return res.status(401).json({ message: "Token has been invalidated. Please log in again." });
        // }

        // const decoded = jwt.verify(token, process.env.JWT_SECRATE);
        // req.user = { id: decoded.userId };
        // req.token = token;
        // return next();


        // let token = req.cookies.tala;
        // if (!token) 
        //     return res.status(401).json({message: "Authentication token is required"});

        // const isBlacklisted = await cacheInstance.get(token);
        // if (isBlacklisted) {
        //     return res.status(401).json({message:"Token has been invalidated. Please log in again."});
        // }
        // const decoded = jwt.verify(token,process.env.JWT_SECRATE);

        // if (!decoded) {
        //     return res.status(400).json({message:"Unauthorized request"});
        // }
        // let user = await userModel.findById(decoded.id);
        // if (!user) {
        //     return res.status(400).json({message:"Something went wrong"});
        // }

        // // res.user = {id: decoded.userId};
        // req.token = token;
        // return next()
        let token = req.cookies.tala;
        if (!token)
            return res.status(401).json({ message: "Authentication token is required" });

        const isBlacklisted = await cacheInstance.get(token);
        if (isBlacklisted)
            return res.status(401).json({ message: "Token has been invalidated. Please log in again." });

        const decoded = jwt.verify(token, process.env.JWT_SECRATE);
        if (decoded)
            return res.status(400).json({ message: "Unauthorized request" });
        let user = await userModel.findById(decoded.id);
        if (!user)
            return res.status(400).json({ message: "Something went wrong" });

        req.token = token;
        return next();


    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

module.exports = authenticate;
