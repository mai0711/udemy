const express = require('express');
const router = express.Router();
const multer = require("multer")// to upload file

const storage = multer.diskStorage({
    destination: (req, file, cb) => {//保存先
        cb(null, "public/images"); //画像を保存する場所
    },
    filename: (req, file, cb)=> {  //ファイル名
        cb(null, req.body.name ); //req.body.name = Share.jsxのdataのfileName
    },
});

const upload =  multer({ storage: storage });
//upload file
router.post("/", upload.single("file"), (req, res) => { //fileはpostmanのkey
    try{
        return res.status(200).json("File uploaded successfully");
    }catch(err){
        console.log(err)
    }
})

module.exports = router;