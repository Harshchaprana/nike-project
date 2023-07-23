require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/Products")

app.get("/", (req, res) => {
  res.send("hi iam live raju bhai")
});

app.use(cors({origin:"http://localhost:5173/"},"/api/products", products_routes) )
 
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
