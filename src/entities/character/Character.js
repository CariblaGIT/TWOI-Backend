import { Schema, model } from "mongoose";

const CharacterSchema = new Schema(
    {
        name: {
            type: String,
            unique: true
        },
        image: {
            type: String,
            unique: true
        },
        unlock: {
            type: String,
            unique: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Character = model('Character', CharacterSchema);

export default Character;