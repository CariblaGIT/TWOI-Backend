import 'dotenv/config'
import Pickup from "../../entities/pickup/Pickup.js"
import mongoose from "mongoose"
import { dbConnection } from "../db.js"

export const seederDefaultPickups = async () => {
    try {
		await dbConnection();
		await Pickup.create([
			{
                name: "Red Heart",
                description: "Normal heart to fill empty heart containers for the value of a 1 container",
                type: "heart",
                icon: "redheart.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb869")
			},
			{
                name: "Half Red Heart",
                description: "Medium normal heart to fill empty heart containers for the value of a 1/2 container",
                type: "heart",
                icon: "halfredheart.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb86a")
			},
            {
                name: "Soul Heart",
                description: "Heart added to your current HP if you have less than 20 heart containers for the value of a 1 container, but this container is not permanent",
                type: "heart",
                icon: "soulheart.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb86b")
            },
            {
                name: "Half Soul Heart",
                description: "Medium heart added to your current HP if you have less than 20 heart containers for the value of a 1/2 container, but this container is not permanent",
                type: "heart",
                icon: "halfsoulheart.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb86c")
            },
            {
                name: "Eternal Heart",
                description: "Medium heart added to one of your permanent containers for the value of a 1/2 container; but if you pass to the next floor with this heart in your bar, is transformed into a new full normal heart container",
                type: "heart",
                icon: "eternalheart.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb86d")
            },
            {
                name: "Black Heart",
                description: "Heart added to your current HP if you have less than 20 heart containers for the value of a 1 container, but this container is not permanent and, if you lost it, makes to all the enemies on the actual room 40 instant damage",
                type: "heart",
                icon: "blackheart.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb86e")
            },
            {
                name: "Penny",
                description: "Worth as 1 coin",
                type: "coin",
                icon: "penny.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb86f")
            },
            {
                name: "Nickel",
                description: "Worth as 5 coin",
                type: "coin",
                icon: "nickel.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb870")
            },
            {
                name: "Dime",
                description: "Worth as 10 coin",
                type: "coin",
                icon: "dime.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb871")
            },
            {
                name: "Lucky Penny",
                description: "Worth as 1 coin and also grants +1 luck",
                type: "coin",
                icon: "luckypenny.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb872")
            },
            {
                name: "Bomb",
                description: "Worth as 1 bomb, and his usage is for breaking stuff on the map and to find secrets",
                type: "bomb",
                icon: "bomb.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb873")
            },
            {
                name: "Double Bomb",
                description: "Worth as 2 bombs, and his usage is for breaking stuff on the map and to find secrets",
                type: "bomb",
                icon: "doublebomb.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb874")
            },
            {
                name: "Troll Bomb",
                description: "Is summoned randomly instead of a bomb pickup, and depending on the size, explodes passing certain time or follows the player and after certain time explodes",
                type: "bomb",
                icon: "trollbomb.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb875")
            },
            {
                name: "Golden Bomb",
                description: "Worth as 0 bombs, but during the actual floor you can use infinite bombs",
                type: "bomb",
                icon: "goldenbomb.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb876")
            },
            {
                name: "Key",
                description: "Worth as 1 key, and his usage is for opening all doors and chests with a keyhole",
                type: "key",
                icon: "key.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb877")
            },
            {
                name: "Golden Key",
                description: "Worth as 0 keys, but during the actual floor you can use infinite keys",
                type: "key",
                icon: "goldenkey.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb878")
            },
            {
                name: "Key Ring",
                description: "Worth as 2 keys, and his usage is for opening all doors and chests with a keyhole",
                type: "key",
                icon: "keyring.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb879")
            },
            {
                name: "Lil Battery",
                description: "Worth as 6 charges on an active item",
                type: "battery",
                icon: "lilbattery.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb87a")
            },
            {
                name: "Micro Battery",
                description: "Worth as 2 charges on an active item",
                type: "battery",
                icon: "microbattery.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb87b")
            },
            {
                name: "Mega Battery",
                description: "Worth as 2 full charges on all active items you are holding",
                type: "battery",
                icon: "megabattery.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb87c")
            },
            {
                name: "The Fool",
                description: "Teleports the player back to the starting room of the floor that he is currently on",
                type: "card",
                icon: "thefool.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb87d")
            },
            {
                name: "The Magician",
                description: "Grants homing tears and +3 Range for the current room",
                type: "card",
                icon: "themagician.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb87e")
            },
            {
                name: "The High Priestess",
                description: "Moms dismembered leg is called down to deal 300 damage to anything it stomps. It will always stomp on the enemy with the most health. Shopkeepers count as enemies. If used in an empty room or during the fight with Mom, it will stomp Isaac instead",
                type: "card",
                icon: "thehighpriestess.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb87f")
            },
            {
                name: "The Empress",
                description: "Triggers the Whore of Babylon effect (+1.5 Damage, +0.3 Speed) for the current room, regardless of Isaacs health total",
                type: "card",
                icon: "theempress.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb880")
            },
            {
                name: "The Emperor",
                description: "Teleports the player into the Boss Room of a floor",
                type: "card",
                icon: "theemperor.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb881")
            },
            {
                name: "The Hierophant",
                description: "Drops 2 full Soul Hearts on the ground",
                type: "card",
                icon: "thehierophant.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb882")
            },
            {
                name: "The Lovers",
                description: "Drops 2 full Red Hearts on the ground",
                type: "card",
                icon: "thelovers.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb883")
            },
            {
                name: "The Chariot",
                description: "Gives invulnerability and +0.28 speed for six seconds, removing the ability to shoot tears and replacing it with the ability to deal contact damage to enemies",
                type: "card",
                icon: "thechariot.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb884")
            },
            {
                name: "Justice",
                description: "Drops a random type of Heart, Key, Bomb and Coin pickup on the ground",
                type: "card",
                icon: "justice.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb885")
            },
            {
                name: "The Hermit",
                description: "Teleports the player into the Shop",
                type: "card",
                icon: "thehermit.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb886")
            },
            {
                name: "Wheel of Fortune",
                description: "Creates a Slot Machine or Fortune Telling Machine near the player",
                type: "card",
                icon: "wheeloffortune.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb887")
            },
            {
                name: "Strength",
                description: "Grants the effects of Magic Mushroom (minus the health restoration) for one room. The added Red Heart container is not removed if doing so would kill the player",
                type: "card",
                icon: "strength.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb888")
            },
            {
                name: "The Hanged Man",
                description: "Removes players body, allowing him to fly around for the duration of the room",
                type: "card",
                icon: "thehangedman.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb889")
            },
            {
                name: "Death",
                description: "Deals 40 damage to all enemies in the room",
                type: "card",
                icon: "death.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb88a")
            },
            {
                name: "Temperance",
                description: "Creates a Blood Donation Machine near the player; or spawns a Devil Beggar in Greed mode",
                type: "card",
                icon: "temperance.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb88b")
            },
            {
                name: "The Devil",
                description: "Grants the player a temporary +2 increase to Damage for the current room",
                type: "card",
                icon: "thedevil.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb88c")
            },
            {
                name: "The Tower",
                description: "Drops 6 Troll Bombs randomly around the room",
                type: "card",
                icon: "thetower.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb88d")
            },
            {
                name: "The Stars",
                description: "Teleports the player into the Planetarium room if exists; if not is selected a Treasure room on that floor",
                type: "card",
                icon: "thestars.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb88e")
            },
            {
                name: "The Moon",
                description: "Teleports the player to the Secret Room. This card will open one random wall once inside the Secret Room, so is possible to leave even if he doesnt have any Bombs available. Randomly chooses a Secret Room if there are multiple",
                type: "card",
                icon: "themoon.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb88f")
            },
            {
                name: "The Sun",
                description: "Restores all the players health (containers for red hearts), deals 100 damage to all enemies in the room, reveals the map for the current floor except for the Super Secret Room and Ultra Secret Room, and removes Curse of Darkness for the current floor",
                type: "card",
                icon: "thesun.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb890")
            },
            {
                name: "Judgement",
                description: "Spawns a Beggar or a Devil Beggar near the player. Has a 2% chance to spawn a special beggar (a Battery Bum, Rotten Beggar, Key Master, or Bomb Bum) instead",
                type: "card",
                icon: "judgement.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb891")
            },
            {
                name: "The World",
                description: "Reveals the entire floor, except for the Super Secret Room and Ultra Secret Room",
                type: "card",
                icon: "theworld.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb892")
            }
		]);
		console.log("Default pickups created");
	} catch (error) {
		console.log(error);
	} finally {
		mongoose.disconnect();
	}
}