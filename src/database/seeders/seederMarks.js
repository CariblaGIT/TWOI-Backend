import 'dotenv/config'
import Mark from '../../entities/mark/Mark.js'
import mongoose from "mongoose"
import { dbConnection } from "../db.js"

export const seederDefaultMarks = async () => {
    try {
		await dbConnection();
		await Mark.create([
			{
                image: "heart.png",
                achievement_id: ["6634aa90e5fc477b76acb893"],
                character_id: ["6634aa90e5fc477b76acb847"],
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb8a1")
			},
			{
                image: "isaac.png",
                achievement_id: ["6634aa90e5fc477b76acb894"],
                character_id: ["6634aa90e5fc477b76acb847"],
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb8a2")
			},
            {
                image: "qms.png",
                achievement_id: ["6634aa90e5fc477b76acb895"],
                character_id: ["6634aa90e5fc477b76acb847"],
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb8a3")
            },
            {
                image: "satan.png",
                character_id: "6634aa90e5fc477b76acb847",
                achievement_id: ["6634aa90e5fc477b76acb896"],
                character_id: ["6634aa90e5fc477b76acb847"],
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb8a4")
            },
            {
                image: "lamb.png",
                achievement_id: ["6634aa90e5fc477b76acb897"],
                character_id: ["6634aa90e5fc477b76acb847"],
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb8a5")
            },
            {
                image: "megasatan.png",
                achievement_id: ["6634aa90e5fc477b76acb898"],
                character_id: ["6634aa90e5fc477b76acb847"],
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb8a6")
            },
            {
                image: "bossrush.png",
                achievement_id: ["6634aa90e5fc477b76acb899"],
                character_id: ["6634aa90e5fc477b76acb847"],
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb8a7")
            },
            {
                image: "hush.png",
                achievement_id: ["6634aa90e5fc477b76acb89a"],
                character_id: ["6634aa90e5fc477b76acb847"],
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb8a8")
            },
            {
                image: "greed.png",
                achievement_id: ["6634aa90e5fc477b76acb89b"],
                character_id: ["6634aa90e5fc477b76acb847"],
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb8a9")
            },
            {
                image: "greedier.png",
                achievement_id: ["6634aa90e5fc477b76acb89c"],
                character_id: ["6634aa90e5fc477b76acb847"],
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb8aa")
            },
            {
                image: "delirium.png",
                achievement_id: ["6634aa90e5fc477b76acb89d"],
                character_id: ["6634aa90e5fc477b76acb847"],
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb8ab")
            },
            {
                image: "mother.png",
                achievement_id: ["6634aa90e5fc477b76acb89e"],
                character_id: ["6634aa90e5fc477b76acb847"],
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb8ac")
            },
            {
                image: "ultrabeast.png",
                achievement_id: ["6634aa90e5fc477b76acb89f"],
                character_id: ["6634aa90e5fc477b76acb847"],
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb8ad")
            },
            {
                image: "allchallenges.png",
                achievement_id: ["6634aa90e5fc477b76acb8a0"],
                character_id: ["6634aa90e5fc477b76acb847"],
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