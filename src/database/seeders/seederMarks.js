import 'dotenv/config'
import Mark from '../../entities/mark/Mark.js'
import mongoose from "mongoose"
import { dbConnection } from "../db.js"

export const seederDefaultMarks = async () => {
    try {
		await dbConnection();
		await Mark.create([
			{
                image: "isaac-heart.png",
                character_id: "6634aa90e5fc477b76acb847",
                achievement_id: "6634aa90e5fc477b76acb893",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb8a1")
			},
			{
                image: "isaac-isaac.png",
                character_id: "6634aa90e5fc477b76acb847",
                achievement_id: "6634aa90e5fc477b76acb894",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb8a2")
			},
            {
                image: "isaac-qms.png",
                character_id: "6634aa90e5fc477b76acb847",
                achievement_id: "6634aa90e5fc477b76acb895",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb8a3")
            },
            {
                image: "isaac-satan.png",
                character_id: "6634aa90e5fc477b76acb847",
                achievement_id: "6634aa90e5fc477b76acb896",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb8a4")
            },
            {
                image: "isaac-lamb.png",
                character_id: "6634aa90e5fc477b76acb847",
                achievement_id: "6634aa90e5fc477b76acb897",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb8a5")
            },
            {
                image: "isaac-megasatan.png",
                character_id: "6634aa90e5fc477b76acb847",
                achievement_id: "6634aa90e5fc477b76acb898",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb8a6")
            },
            {
                image: "isaac-bossrush.png",
                character_id: "6634aa90e5fc477b76acb847",
                achievement_id: "6634aa90e5fc477b76acb899",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb8a7")
            },
            {
                image: "isaac-hush.png",
                character_id: "6634aa90e5fc477b76acb847",
                achievement_id: "6634aa90e5fc477b76acb89a",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb8a8")
            },
            {
                image: "isaac-greed.png",
                character_id: "6634aa90e5fc477b76acb847",
                achievement_id: "6634aa90e5fc477b76acb89b",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb8a9")
            },
            {
                image: "isaac-greedier.png",
                character_id: "6634aa90e5fc477b76acb847",
                achievement_id: "6634aa90e5fc477b76acb89c",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb8aa")
            },
            {
                image: "isaac-delirium.png",
                character_id: "6634aa90e5fc477b76acb847",
                achievement_id: "6634aa90e5fc477b76acb89d",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb8ab")
            },
            {
                image: "isaac-mother.png",
                character_id: "6634aa90e5fc477b76acb847",
                achievement_id: "6634aa90e5fc477b76acb89e",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb8ac")
            },
            {
                image: "isaac-ultrabeast.png",
                character_id: "6634aa90e5fc477b76acb847",
                achievement_id: "6634aa90e5fc477b76acb89f",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb8ad")
            },
            {
                image: "isaac-allchallenges.png",
                character_id: "6634aa90e5fc477b76acb847",
                achievement_id: "6634aa90e5fc477b76acb8a0",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb8ae")
            }
		]);
		console.log("Default marks created");
	} catch (error) {
		console.log(error);
	} finally {
		mongoose.disconnect();
	}
}