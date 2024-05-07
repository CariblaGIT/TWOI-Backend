import Achievement from "./Achievement.js"

export const getAllAchievements = async (req, res) => {
    try {
        const achievements = await Achievement.find({});

        return res.status(200).json({
            success: true,
            message: "Achievements retrieved succesfully",
            data: achievements
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const postAchievement = async (req, res) => {
    return res.status(201).json({
        success: true,
        message: "Achievement posted succesfully",
        // data: achievements
    });
}

export const updateAchievementById = async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Achievement updated succesfully",
        // data: achievements
    });
}

export const deleteAchievementById = async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Achievement deleted succesfully"
    });
}