const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    
    

    image: {
        type: String, // Use String type for storing the image URL
        required: true // Add other options as needed
      },

    name: {
        type: String,
        required: true,
        
    },

    description : {
        type: String,
        required: true,
        default:"The radiance lives on in the Air Force 1 '07 LV8. This b-ball original puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine. This winter-ready version helps keep you warm and has traction to beat the elements.",
        
    },

     
    price:{
        type:Number,
        required: [true,"price must be provided"],
    },
    stars:{
        type:Number,
        required:true,
        default:3.5,
    },

    featured: {
        type: Boolean,
        default:false,
    },
    rating:{
        type:Number,
        default: 4.9,
    },
    createAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: {
            values: ["nike", "raju"],
            message:`{VALUE} is not supported` ,
        }
    },
    
});

const Nikeshoue = new mongoose.model("Nikeshoues", productSchema);

 module.exports = Nikeshoue
