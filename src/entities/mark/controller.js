import Mark from "./Mark.js"

export const getAllMarks = async (req, res) => {
    try {
        const marks = await Mark.find({});

        return res.status(200).json({
            success: true,
            message: "Marks retrieved succesfully",
            data: marks
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const postMark = async (req, res) => {
    try {
        const { image, achievement_id } = req.body;

        if(!image || !character_id || !achievement_id){
            throw new Error ("No provided correct data for post a mark");
        }

        const newMark = await Mark.create({
            image,
            achievement_id
        });
        
        return res.status(200).json({
            success: true,
            message: "Mark posted succesfully",
            data: newMark
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const updateMarkById = async (req, res) => {
    try {
        const { image, achievement_id } = req.body;
        const markId = req.params.id;

        if(!image && !character_id && !achievement_id){
            throw new Error ("No provided data to update a mark");
        }

        const markToUpdate = await Mark.findById(markId);

        if(image){
            markToUpdate.image = image;
        }

        if(achievement_id){
            markToUpdate.achievement_id = achievement_id;
        }

        markToUpdate.save();

        return res.status(200).json({
            success: true,
            message: "Mark updated succesfully",
            data: markToUpdate
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteMarkById = async (req, res) => {
    try {
        const markId = req.params.id;

        await Mark.deleteOne({ _id: markId });

        return res.status(200).json({
            success: true,
            message: "Mark deleted succesfully"
        });
    } catch (error) {
        console.log(error.message);
    }
}