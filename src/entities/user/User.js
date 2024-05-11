import { Schema, model } from "mongoose";

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: false,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            default: "default_avatar.png"
        },
        role: {
            type: String,
            enum: ["user", "admin", "super_admin"],
            default: "user"
        },
        achievements:[{
            type: Schema.Types.ObjectId,
            ref: 'Achievement'
        }],
        characters:[{
            type: Schema.Types.ObjectId,
            ref: 'Character'
        }],
        marks:[{
            type: Schema.Types.ObjectId,
            ref: 'Mark'
        }],
        is_active: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const User = model('User', UserSchema);

export default User;