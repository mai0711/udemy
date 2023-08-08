const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")
const uploadRoute = require("./routes/upload")
const path = require("path");
const PORT = 4000

require("dotenv").config()




//middleware
app.use("/images", express.static(path.join(__dirname, "public/images"))); //"/imagesの時public/imagesに行く"
app.use(express.json())
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/upload", uploadRoute); //画像アップロード用

//connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("DB connection is Successful");
}).catch((error)=>{
    console.log(error)
});


app.listen(PORT, () => {console.log("Server is running");});