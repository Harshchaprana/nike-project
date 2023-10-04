// const mongoose = require("mongoose");


// const connectDB = (uri) => {
    
//     return mongoose.connect(uri,{
//         useNewUrlParser: true,
//         useUniFiedTopology:true,
//     });
// };



// module.exports = connectDB;

const mongoose = require("mongoose");

 
mongoose
   .connect("mongodb://127.0.0.1:27017/nike",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
     console.log("connection succes");
}).catch((e) => {
    console.log("connection fail");
})
