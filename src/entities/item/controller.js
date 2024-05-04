import Item from "./Item"

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
            throw new Error ("No provided correct data for post a character");
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
    return res.status(200).json({
        success: true,
        message: "Item updated succesfully",
        //data: itemToUpdate
    });
}

export const deleteItemById = async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Item deleted succesfully"
    });
}