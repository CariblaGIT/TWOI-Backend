import 'dotenv/config'
import Character from "../../entities/character/Character.js"
import mongoose from "mongoose"
import { dbConnection } from "../db.js"

export const seederDefaultCharacters = async () => {
    try {
		await dbConnection();
		await Character.create([
			{
                name: "Isaac",
				image: "isaac.png",
                unlock: "Default character from the game",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb847")
			},
			{
                name: "Magdalene",
				image: "magdalene.png",
                unlock: "Having 7 or more heart containers at some moment in a run",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb848")
			},
            {
                name: "Cain",
				image: "cain.png",
                unlock: "Carrying 55 or more coins at some moment in a run",
				_id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb849")
            },
            {
                name: "Judas",
				image: "judas.png",
                unlock: "Defeating Satan for first time using any character",
				_id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb84a")
            },
            {
                name: "???",
				image: "questions.png",
                unlock: "Defeating Moms Heart for 10 times using any character/s",
				_id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb84b")
            },
            {
                name: "Eve",
				image: "eve.png",
                unlock: "Beating 2 floors in a row without picking any heart using any character",
				_id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb84c")
            },
            {
                name: "Samson",
				image: "samson.png",
                unlock: "Beating 2 floors in a row without receiving any damage using any character",
				_id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb84d")
            },
            {
                name: "Azazel",
				image: "azazel.png",
                unlock: "Making 3 deals with the Devil on the same run using any character",
				_id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb84e")
            },
            {
                name: "Lazarus",
				image: "lazarus.png",
                unlock: "Having 4 or more Soul Hearts or Black Hearts using any character",
				_id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb84f")
            },
            {
                name: "Eden",
				image: "eden.png",
                unlock: "Completing The Womb for the first time with any character",
				_id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb850")
            },
            {
                name: "The Lost",
				image: "lost.png",
                unlock: "Dying in a Sacrifice room holding Missing Poster",
				_id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb851")
            },
            {
                name: "Lilith",
				image: "lilith.png",
                unlock: "Completing a run in Greed Mode using Azazel",
				_id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb852")
            },
            {
                name: "Keeper",
				image: "keeper.png",
                unlock: "Donating a 1000 coins on the Greed Donation Machine",
				_id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb853")
            },
            {
                name: "Apollyon",
				image: "apollyon.png",
                unlock: "Defeating Mega Satan for first time with any character",
				_id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb854")
            },
            {
                name: "The Forgotten",
				image: "forgotten.png",
                unlock: "The Lamb must have been defeated previously before The Forgotten can be unlocked. First, start a new run as any character and defeat the first floor boss within 1 minute, Mom will yell and the sound of running footsteps will play, then a large shadow of a shovel handle will loom over the floor of the starting room. Bombing anywhere in the starting room will spawn the Broken Shovel. Initially the shovel piece behaves like a pickup, laying on the floor, and turns into an active collectible only when touched for the first time. Next, clear Boss Rush to grant the second piece of the Broken Shovel, completing Moms Shovel. Finally, using the shovel in a single Grave Room with a Dirt Patch in its center in the Dark Room, unlocks The Forgotten.",
				_id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb855")
            },
            {
                name: "Bethany",
				image: "bethany.png",
                unlock: "Defeating Moms Heart or It Lives in hard mode with Lazarus without losing a life",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb856")
            }
		]);
		console.log("Default characters created");
	} catch (error) {
		console.log(error);
	} finally {
		mongoose.disconnect();
	}
}