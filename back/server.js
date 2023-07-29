const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")
const PORT = 6000

require("dotenv").config()

// app.get("/", (req, res) => {
//     res.send("home");
// });

//middleware
app.use(express.json())
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

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