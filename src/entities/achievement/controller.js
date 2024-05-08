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
    try {
        const { name, description, how_to, image, character_id, item_id, pickup_id } = req.body;

        if(!name || !description || !how_to || !image){
            throw new Error ("No provided correct data for post a pickup");
        }

        const newAchievementItems = {
            name,
            description,
            type,
            image
        };

        if(character_id){
            newAchievementItems.character_id = character_id
        };

        if(item_id){
            newAchievementItems.item_id = item_id
        };

        if(character_id){
            newAchievementItems.pickup_id = pickup_id
        };

        const newAchievement = await Achievement.create(newAchievementItems);
        
        return res.status(200).json({
            success: true,
            message: "Achievement posted succesfully",
            data: newAchievement
        });
    } catch (error) {
        console.log(error.message);
    }
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