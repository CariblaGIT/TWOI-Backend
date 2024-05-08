import { Schema, model } from "mongoose";

const AchievementSchema = new Schema(
    {
        name: {
            type: String,
            unique: true
        },
        description: {
            type: String
        },
        how_to: {
            type: String,
            unique: true
        },
        image: {
            type: String,
            unique: true
        },
        character_id: {
            type: String,
            default: null
        },
        item_id: {
            type: String,
            default: null
        },
        pickup_id: {
            type: String,
            default: null
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Achievement = model('Achievement', AchievementSchema);

export default Achievement;