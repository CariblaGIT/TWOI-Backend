import { Schema, model } from "mongoose";

const PickupSchema = new Schema(
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

const Pickup = model('Pickup', PickupSchema);

export default Pickup;