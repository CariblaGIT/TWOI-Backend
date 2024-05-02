import Character from "./Character.js";

export const getAllCharacters = async (req, res) => {
    try {
        const characters = await Character.find({});
        return res.status(200).json({
            success: true,
            message: "Characters retrieved succesfully",
            data: characters
        })
    } catch (error) {
        console.log(error.message);
    }
}

export const postCharacter = async (req, res) => {
    try {
        const { name, image, unlock } = req.body;

        if(!name || !image || !unlock){
            throw new Error ("No provided correct data for post a character");
        }

        const newCharacter = await Character.create({
            name,
            image,
            unlock
        });
        
        return res.status(200).json({
            success: true,
            message: "Characters posted succesfully",
            data: newCharacter
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const updateCharacterById = async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Characters updated succesfully"
    })
}

export const deleteCharacterById = async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Characters deleted succesfully"
    })
}