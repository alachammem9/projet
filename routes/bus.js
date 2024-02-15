const express=require('express')
const bus=require('../models/bus')
const busrouter=express.Router()
// get all bus
busrouter.get('/all',async(req,res)=>{
    try {
        const rest=await bus.find()
        res.send({voicilist:rest,msg:'voici la liste des buss'})
    } catch (error) {
        console.log(error)
    }
})
// get bus by id
busrouter.get("/:id",async(req,res)=>{
    try {
        const rest=await bus .findById({_id:req.params.id})
        res.send({resultat:rest,msg:'hahou il bus'})
    } catch (error) {
        console.log(error)
        
    }
})
// add new bus
busrouter.post("/add", async (req, res) => {
    try {
        const newbus= new bus (req.body)
        const rest=await newbus.save()
        res.send({newuser:rest,msg:'new user is added'})
        
    } catch (error) {
        console.log(error)
        
    }
})
// delete bus
busrouter.delete("/:id",async (req ,res )=>{
    try {
        const rest=await bus .findByIdAndDelete({_id:req.params.id})
        res.send({msg:'hahou il bus itfasa5'})
    } catch (error) {
        console.log(error)
        
    }
})
// update bus
busrouter.put("/:id",async (req ,res )=>{
    try {
        const rest=await bus .findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}})
        res.send({voici:rest,msg:'hahou il bus itbadel'})
    } catch (error) {
        console.log(error)
        
    }
})
// update reservation
busrouter.put("/reserve/:id",async (req ,res )=>{
    try {
        const rest=await bus .findByIdAndUpdate({_id:req.params.id},{$push:{réservation:req.body}})
        res.send({voici:rest,msg:'hahou il bus reserve'})
    } catch (error) {
        console.log(error)
        
    }
})
module.exports=busrouter