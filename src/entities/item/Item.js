import { Schema, model } from "mongoose";

const ItemSchema = new Schema(
    {
        name: {
            type: String,
            unique: true
        },
        quote: {
            type: String
        },
        description: {
            type: String,
            unique: true
        },
        type: {
            type: String,
            enum: ["active", "pasive"]
        },
        icon: {
            type: String,
            unique: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Item = model('Item', ItemSchema);

export default Item;