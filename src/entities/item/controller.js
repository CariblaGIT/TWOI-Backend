import Item from "./Item.js"

export const getAllItems = async (req, res) => {
    try {
        const items = await Item.find({});

        return res.status(200).json({
            success: true,
            message: "Items retrieved succesfully",
            data: items
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const postItem = async (req, res) => {
    try {
        const { name, quote, description, type, icon } = req.body;

        if(!name || !quote || !description || !type || !icon){
            throw new Error ("No provided correct data for post a item");
        }

        const newItem = await Item.create({
            name,
            quote,
            description,
            type,
            icon
        });
        
        return res.status(200).json({
            success: true,
            message: "Item posted succesfully",
            data: newItem
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const updateItemById = async (req, res) => {
    try {
        const { name, quote, description, type, icon } = req.body;
        const itemId = req.params.id;

        if(!name && !quote && !description && !type && !icon){
            throw new Error ("No provided data to update a item");
        }

        const itemToUpdate = await Item.findById(itemId);

        if(name){
            itemToUpdate.name = name;
        }

        if(quote){
            itemToUpdate.quote = quote;
        }

        if(description){
            itemToUpdate.description = description;
        }

        if(type){
            itemToUpdate.type = type;
        }

        if(icon){
            itemToUpdate.icon = icon;
        }

        itemToUpdate.save();

        return res.status(200).json({
            success: true,
            message: "Item updated succesfully",
            data: itemToUpdate
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteItemById = async (req, res) => {
    try {
        const itemId = req.params.id;

        await Item.deleteOne({ _id: itemId });

        return res.status(200).json({
            success: true,
            message: "Item deleted succesfully"
        });
    } catch (error) {
        console.log(error.message);
    }
}