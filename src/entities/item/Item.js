import { Schema, model } from "mongoose";

const ItemSchema = new Schema(
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

const Item = model('Item', ItemSchema);

export default Item;