

import { Router } from "express";
import Medicine from "../models/medicine.js";

const router = Router();

function getDiscountPrice(price,discount){
    return Number((price - (price * discount) / 100).toFixed(2));
}

function getDeliveryDate(days = 3){
    const date = new Date();
    date.setDate(date.getDate() + days);

    return date.toLocaleDateString("en-IN", {
        weekday: "short",
        day : "numeric",
        month : "short",
    })
}

router.get("/", async (req,res)=>{
    try{
        const medicines = await Medicine.find();
        const response = medicines.map((med)=>({
            ...med._doc,
            finalPrice : getDiscountPrice(med.price,med.discount),
            deliveryBy: getDeliveryDate(3),
        }))
        res.json(response);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

router.get("/category/:category", async (req,res)=>{
    try{
        const category = req.params.category;
         
        const medicines = await Medicine.find({
            category: {$regex: category,$options:"i"},
        })
        res.json(medicines);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

router.get("/:id", async (req,res)=>{
    try{
        const medicine = await Medicine.findById(req.params.id);
        if(!medicine){
            return res.status(404).json({message: "Medicine not found"});
        }
        res.json(medicine);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

export default router;