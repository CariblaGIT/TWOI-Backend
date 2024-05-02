
export const getUsers = async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Users retrieved succesfully"
    })
}

export const getProfile = async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "User retrieved succesfully"
    })
}

export const getUserMarks = async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Retrieved user marks succesfully"
    })
}

export const getUserAchievemnts = async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Retrieved user achievements succesfully"
    })
}

export const getUserCharacters = async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Retrieved user characters succesfully"
    })
}

export const modifyProfile = async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "User profile updated succesfully"
    })
}

export const giveOrRemoveMark = async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "User gived or removed mark succesfully"
    })
}

export const giveOrRemoveAchievement = async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "User gived or removed achievement succesfully"
    })
}

export const giveOrRemoveCharacter = async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "User gived or removed character succesfully"
    })
}

export const suspendUser = async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "User suspended or activated succesfully"
    })
}

export const deleteUserById = async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "User deleted succesfully"
    })
}