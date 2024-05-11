import { Schema, model } from "mongoose";

const MarkSchema = new Schema(
    {
        image: {
            type: String,
            unique: true
        },
        achievement_id: [{
            type: String
        }]
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Mark = model('Mark', MarkSchema);

export default Mark;