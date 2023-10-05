const mongoose = require("mongoose");


const connectDB = (uri) => {
    
    return mongoose
    .connect(uri,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        }).then(() => {
             console.log("connection succes");
        }).catch((e) => {
            console.log("connection fail");
        })
        
};



module.exports = connectDB;
