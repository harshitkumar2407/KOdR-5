
import { Router } from "express";
import { registerUser,loginUser,getMe ,logoutUser} from "../controllers/Auth.controllers";
import requireAuth from "../middleware/auth.middleware";

const authrouter = Router();


authrouter.post("/login", loginUser);

authrouter.post("/register", registerUser);


authrouter.get("/getme",requireAuth, getMe);

authrouter.post("/logout", requireAuth, logoutUser);

export default authrouter;