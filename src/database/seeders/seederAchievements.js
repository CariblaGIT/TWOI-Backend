import 'dotenv/config'
import Achievement from '../../entities/achievement/Achievement.js'
import mongoose from "mongoose"
import { dbConnection } from "../db.js"

export const seederDefaultAchievements = async () => {
    try {
		await dbConnection();
		await Achievement.create([
			{
                name: "Lost Baby",
                description: "Unlocked a new co-player baby",
                how_to: "Defeat Moms Heart on Hard mode as Isaac",
                image: "lostbaby.png",
                character_id: "6634aa90e5fc477b76acb847",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb893")
			},
			{
                name: "Isaacs Tears",
                description: "Unlocked a new item",
                how_to: "Defeat Isaac as Isaac",
                image: "isaacstears.png",
                character_id: "6634aa90e5fc477b76acb847",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb894")
			},
            {
                name: "The D20",
                description: "Unlocked a new item",
                how_to: "Defeat ??? as Isaac",
                image: "thed20.png",
                character_id: "6634aa90e5fc477b76acb847",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb895")
            },
            {
                name: "Moms Knife",
                description: "Unlocked a new item",
                how_to: "Defeat Satan as Isaac",
                image: "momsknife.png",
                character_id: "6634aa90e5fc477b76acb847",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb896")
            },
            {
                name: "Missing Poster",
                description: "Unlocked a new item",
                how_to: "Defeat The Lamb as Isaac",
                image: "missingposter.png",
                character_id: "6634aa90e5fc477b76acb847",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb897")
            },
            {
                name: "Cry Baby",
                description: "Unlocked a new co-player baby",
                how_to: "Defeat Mega Satan as Isaac",
                image: "crybaby.png",
                character_id: "6634aa90e5fc477b76acb847",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb898")
            },
            {
                name: "Isaacs Head",
                description: "Unlocked a new item",
                how_to: "Defeat the Boss Rush as Isaac",
                image: "isaacshead.png",
                character_id: "6634aa90e5fc477b76acb847",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb899")
            },
            {
                name: "Fart Baby",
                description: "Unlocked a new item",
                how_to: "Defeat Hush as Isaac",
                image: "fartbaby.png",
                character_id: "6634aa90e5fc477b76acb847",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb89a")
            },
            {
                name: "Lil Chest",
                description: "Unlocked a new item",
                how_to: "Defeat Ultra Greed as Isaac",
                image: "lilchest.png",
                character_id: "6634aa90e5fc477b76acb847",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb89b")
            },
            {
                name: "D1",
                description: "Unlocked a new item",
                how_to: "Defeat Ultra Greedier as Isaac",
                image: "d1.png",
                character_id: "6634aa90e5fc477b76acb847",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb89c")
            },
            {
                name: "D infinity",
                description: "Unlocked a new item",
                how_to: "Defeat Delirium as Isaac",
                image: "dinfinity.png",
                character_id: "6634aa90e5fc477b76acb847",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb89d")
            },
            {
                name: "Meat Claver",
                description: "Complete the Corpse with Isaac",
                how_to: "Defeat Mother as Isaac",
                image: "dinfinity.png",
                character_id: "6634aa90e5fc477b76acb847",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb89e")
            },
            {
                name: "Options?",
                description: "Complete the final chapter with Isaac",
                how_to: "Defeat Ultra Beast as Isaac",
                image: "options_qm.png",
                character_id: "6634aa90e5fc477b76acb847",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb89f")
            },
            {
                name: "Buddy Baby",
                description: "Unlocked a new co-player baby",
                how_to: "Earn all Hard mode Completion Marks as Isaac",
                image: "buddybaby.png",
                character_id: "6634aa90e5fc477b76acb847",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb8a0")
            }
		]);
		console.log("Default achievements created");
	} catch (error) {
		console.log(error);
	} finally {
		mongoose.disconnect();
	}
}