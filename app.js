require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const cors = require("cors")
const PORT = process.env.PORT || 5000;
const router = require("./routes/Products")


app.use(cors());
app.use(express.json());
app.use(router);
app.get("/", (req, res) => {
  res.send("hi iam live raju bhai")
});

const Start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT , () => {
         console.log(`${PORT} Yes I am connected raju bhai`)   
        }) 
    } catch (error) {
        console.log(error)
    }
}

Start();
