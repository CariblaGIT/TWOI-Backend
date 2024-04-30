import { Schema, model } from "mongoose";

const AchievementSchema = new Schema(
    {
        name: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Achievement = model('Achievement', AchievementSchema);

export default Achievement;