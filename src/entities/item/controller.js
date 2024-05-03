
export const getAllItems = async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Items retrieved succesfully",
        //data: items
    });
}

export const postItem = async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Item posted succesfully",
        //data: newItem
    });
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