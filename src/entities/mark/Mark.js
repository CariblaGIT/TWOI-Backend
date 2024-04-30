import { Schema, model } from "mongoose";

const MarkSchema = new Schema(
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

const Mark = model('Mark', MarkSchema);

export default Mark;