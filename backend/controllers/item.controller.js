import Item from "../models/item.models.js";

const createItem = async function (req,res) {
    try{
        const {name,price,description,quantity} = req.body

        if(!name || !price || !description || !quantity){
            return res.status(401).json({msg:'all fields are required'})
        }

        const newItem = new Item({
            name,
            price,
            description,
            quantity
        })

        await newItem.save()
        res.status(201).json({msg:'item created',item:newItem})
    }
    catch(error){
        console.log(error)
    }
}

export {createItem}