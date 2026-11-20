const { Router } = require("express");
const { createPostController } = require("../controller/post.controller");
const {upload} = require("../config/multer");



const postRouter = Router();

postRouter.post("/post",upload.single("image"),createPostController);






module.exports = postRouter;