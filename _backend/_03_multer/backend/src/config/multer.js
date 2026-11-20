const multer = require("multer");
const path = require("path");

// let storage = multer.diskStorage({
//     destination:(req,file,cd) =>{
//         cd(null,"./src/uploads");
//     },

//     filename:(req,file,cb)=>{
//     const uniqueName = `${Date.now()}${path.extname(file.originalname)}`;
//     cb(null, uniqueName);
//     }
// })

let storage = multer.memoryStorage();

const upload = multer({storage});

module.exports = {upload};


