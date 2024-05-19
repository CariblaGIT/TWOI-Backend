import User from "./User.js"
import { verifyEmail } from "../../core/utils/verifyEmail.js"
import { verifyPassword } from "../../core/utils/verifyPassword.js"
import Achievement from "../achievement/Achievement.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find({});

        if(!users){
            throw new Error("You cant find users")
        }

        return res.status(200).json({
            success: true,
            message: "Users retrieved succesfully",
            data: users
        })
    } catch (error) {
        console.log(error.message);
    }
}

export const getProfile = async (req, res) => {
    try {
        const userId = req.tokenData.userId;

        const user = await User.findById(userId, 'username email avatar _id').populate({path: "characters marks achievements"});

        return res.status(200).json({
            success: true,
            message: "User profile retrieved succesfully",
            data: user
        })
    } catch (error) {
        console.log(error.message);
    }
}

export const getUserMarks = async (req, res) => {
    try {
        const userId = req.tokenData.userId;

        const user = await User.findById(userId).populate({path: "marks"});

        return res.status(200).json({
            success: true,
            message: "User marks retrieved succesfully",
            data: user
        })
    } catch (error) {
        console.log(error.message);
    }
}

export const getUserAchievemnts = async (req, res) => {
    try {
        const userId = req.tokenData.userId;

        const user = await User.findById(userId).populate({path: "achievements"});

        return res.status(200).json({
            success: true,
            message: "User achievements retrieved succesfully",
            data: user
        })
    } catch (error) {
        console.log(error.message);
    }
}

export const getUserCharacters = async (req, res) => {
    try {
        const userId = req.tokenData.userId;

        const user = await User.findById(userId).populate({path: "characters"});

        return res.status(200).json({
            success: true,
            message: "User characters retrieved succesfully",
            data: user
        })
    } catch (error) {
        console.log(error.message);
    }
}

export const modifyProfile = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        const avatar = req.file?.filename;
        const userId = req.tokenData.userId;

        if(!username && !email && !password && !avatar){
            throw new Error("Need to bring data to update a user")
        }

        const userToUpdate = await User.findById(userId)

        if(email){
            if (!verifyEmail(email)) {
                throw new Error("Email format invalid")
            } else {
                userToUpdate.email = email;
            }
        }

        if(password){
            if (!verifyPassword(password)){
                throw new Error("Format password invalid")
            } else {
                password = bcrypt.hashSync(password, 5);
                userToUpdate.password = password;
            }
        }

        if(username){
            userToUpdate.username = username;
        }

        if(avatar){
            userToUpdate.avatar = avatar;
        }

        userToUpdate.save();

        return res.status(200).json({
            success: true,
            message: "User profile updated succesfully",
            data: userToUpdate
        })
    } catch (error) {
        console.log(error.message);
    }
}

export const giveOrRemoveMark = async (req, res) => {
    try {
        const userId = req.tokenData.userId;
        const markInteractedId = req.params.id;

        if(userId === markInteractedId){
            throw new Error("You are not a mark")
        }

        const user = await User.findById(userId);

        if(user.marks.includes(markInteractedId)){
            user.marks.pull(markInteractedId);
        } else {
            user.marks.push(markInteractedId);
        }

        await user.save();

        await user.populate({path: "marks"});

        return res.status(200).json({
            success: true,
            message: "Mark given or removed to user succesfully",
            data: user
        })
    } catch (error) {
        console.log(error.message);
    }
}

export const giveOrRemoveAchievement = async (req, res) => {
    try {
        const userId = req.tokenData.userId;
        const achievementInteractedId = req.params.id;

        if(userId === achievementInteractedId){
            throw new Error("You are not an achievement")
        }

        const user = await User.findById(userId);

        if(user.achievements.includes(achievementInteractedId)){
            user.achievements.pull(achievementInteractedId);
        } else {
            user.achievements.push(achievementInteractedId);
        }

        await user.save();

        await user.populate({path: "achievements"});

        return res.status(200).json({
            success: true,
            message: "Achievement given or removed to user succesfully",
            data: user
        })
    } catch (error) {
        console.log(error.message);
    }
}

export const giveOrRemoveCharacter = async (req, res) => {
    try {
        const userId = req.tokenData.userId;
        const characterInteractedId = req.params.id;

        if(userId === characterInteractedId){
            throw new Error("You are not a character")
        }

        const user = await User.findById(userId);

        if(user.characters.includes(characterInteractedId)){
            user.characters.pull(characterInteractedId);
        } else {
            user.characters.push(characterInteractedId);
        }

        await user.save();

        await user.populate({path: "characters"});

        return res.status(200).json({
            success: true,
            message: "Character given or removed to user succesfully",
            data: user
        })
    } catch (error) {
        console.log(error.message);
    }
}

export const suspendUser = async (req, res) => {
    try {
        const userId = req.tokenData.userId;

        const user = await User.findById(userId);

        if(!user){
            throw new Error("Error with the user")
        }

        if(user.is_active){
            user.is_active = false;
        } else {
            user.is_active = true;
        }

        await user.save();

        return res.status(200).json({
            success: true,
            message: "User suspended or reactivated succesfully",
            data: user
        })
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteUserById = async (req, res) => {
    try {
        const userId = req.params.id

        await User.deleteOne({ _id: userId })

        return res.status(200).json({
            success: true,
            message: "User deleted succesfully"
        })
    } catch (error) {
        console.log(error.message)
    }
}