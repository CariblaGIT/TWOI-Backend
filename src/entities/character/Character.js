import { Schema, model } from "mongoose";

const CharacterSchema = new Schema(
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

const Character = model('Character', CharacterSchema);

export default Character;