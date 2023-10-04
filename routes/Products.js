const express = require("express");
const router = express.Router();
const Nikeshoue = require("../models/product")



const {
    getAllProducts
    ,getAllProductsTesting
} = require("../controllers/products"); 

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);




router.post("/products", async (req, res)=>{
    try{
        const addingMensRecords = new Nikeshoue(req.body)
        console.log(req.body);
        const insertMens = await addingMensRecords.save();
        res.status(201).send(insertMens);
    }catch(e){
        res.status(400).send(e)
    }
  })
  
  //we will handle get req
  router.get("/products", async (req, res)=>{
    try{
      const getMens =  await Nikeshoue.find({});
        res.send(getMens);
    }catch(e){
        res.status(400).send(e)
    }
  })
  
   //we will handle get req for induval
   router.get("/products/:id", async (req, res)=>{
    try{
      const _id = req.params.id;
      const getProduct =  await Nikeshoue.findById({_id});
        res.send(getProduct);
    }catch(e){
        res.status(400).send(e)
    }
  })
  

module.exports = router;
