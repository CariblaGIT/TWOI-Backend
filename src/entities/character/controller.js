import Character from "./Character";

export const getAllCharacters = async (req, res) => {
    const characters = await Character.find({});
    return res.status(200).json({
        success: true,
        message: "Characters retrieved succesfully",
        data: characters
    })
}

export const postCharacter = async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Characters posted succesfully"
    })
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