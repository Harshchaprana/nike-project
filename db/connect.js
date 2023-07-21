const mongoose = require("mongoose");


const connectDB = (uri) => {
    
    return mongoose.connect(uri,{
        useNewUrlParser: true,
        useUniFiedTopology:true,
    });
};

module.exports = connectDB;