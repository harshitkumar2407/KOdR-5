const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("./model/auth.model");
const cacheInstance = require("../config/redis");

const cookieOptions = {
    httpOnly: true,
    maxAge: 15 * 60 * 1000,
};

const safeUser = (user) => ({
    id: user._id,
    name: user.name,
    email: user.email,
});

const Register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "Email already registered" });
        }

        const hashPassword = await bcrypt.hash(password, Number(process.env.B_CRYPT));
        const user = await userModel.create({ name, email, password: hashPassword });
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRATE, { expiresIn: "15m" });

        res.cookie("tala", token, cookieOptions);
        return res.status(201).json({ message: "Registered successfully", user: safeUser(user) });
    } catch (error) {
        console.error("Registration error:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const user = await userModel.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRATE, { expiresIn: "15m" });
        res.cookie("tala", token, cookieOptions);

        return res.status(200).json({ message: "Login successful", user: safeUser(user) });
    } catch (error) {
        console.error("Login error:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const Logout = async (req, res) => {
    try {
        // const tala = req.cookies.tala;
        // if (!tala) {
        //     return res.status(401).json({ message: "Unauthorized request", success: false });
        // }

        // const decoded = jwt.verify(tala, process.env.JWT_SECRATE);
        // const tokenExpiry = Math.max(1, Math.floor(decoded.exp - Date.now() / 1000));

        // await cacheInstance.set(tala, "blacklisted", "EX", tokenExpiry);

        // res.clearCookie("tala");

        // return res.status(200).json({ success: true, message: "User logged out" });


        const tala = req.cookies.tala;
        if (!tala) {
            return res.status(401).json({ message: "Unauthorized", success: false });
        }
        const decoded = jwt.verify(tala, process.env.JWT_SECRATE);
        const tokenExpiry = Math.max(1, Math.floor(decoded.exp - Date.now() / 1000));
        await cacheInstance.set(tala, "blacklisted", "EX", tokenExpiry);
        res.clearCookie("tala");
        return res.status(200).json({ success: true, message: "Logout successfull" })


    } catch (error) {
        console.error(error.message);

        return res.status(401).json({ success: false, message: "Invalid or expired token" });
    }
};

module.exports = { Register, Login, Logout };
