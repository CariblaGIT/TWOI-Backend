import { Schema, model } from "mongoose";

const PickupSchema = new Schema(
    {
        name: {
            type: String,
            unique: true
        },
        description: {
            type: String,
            unique: true
        },
        type: {
            type: String,
            enum: ["card", "heart", "trinket", "coin", "bomb", "key", "battery", "pill", "rune", "sack"]
        },
        image: {
            type: String,
            unique: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Pickup = model('Pickup', PickupSchema);

export default Pickup;