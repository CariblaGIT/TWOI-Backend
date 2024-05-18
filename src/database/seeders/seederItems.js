import 'dotenv/config'
import Item from "../../entities/item/Item.js"
import mongoose from "mongoose"
import { dbConnection } from "../db.js"

export const seederDefaultItems = async () => {
    try {
		await dbConnection();
		await Item.create([
			{
                name: "<3",
				quote: "HP up",
                description: "Grants Isaac one Red Heart container and fully restores Isaacs health",
                type: "pasive",
                image: "heart.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb857")
			},
			{
                name: "??? Only Friend",
				quote: "Controlled friend",
                description: "Spawns a controllable familiar that deals 37.5 damage per second on touch. It can be moved using the shooting directional keys",
                type: "pasive",
                image: "onlyfriend.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb858")
			},
            {
                name: "1up",
				quote: "Extra life",
                description: "Gives Isaac an extra life. Upon death, he will respawn in the previous room with full health, after which 1up! will disappear",
                type: "pasive",
                image: "1up.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb859")
            },
            {
                name: "20-20",
				quote: "Double shoot",
                description: "Isaac fires two tears at once, one from each eye and 0.8x damage multiplier",
                type: "pasive",
                image: "20-20.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb85a")
            },
            {
                name: "3 Dollar Bill",
				quote: "Rainbow tears",
                description: "Gives Isaac a random tear effect every few seconds",
                type: "pasive",
                image: "3dollarbill.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb85b")
            },
            {
                name: "A Dollar",
				quote: "$$$",
                description: "Gives Isaac 100 pennies",
                type: "pasive",
                image: "adollar.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb85c")
            },
            {
                name: "9 Volt",
				quote: "Quicker charge",
                description: "Reduces the charge of any activated item by 1. Any 1 charge items instead have timed recharges",
                type: "pasive",
                image: "9volt.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb85d")
            },
            {
                name: "Lump of Coal",
				quote: "My Xmas present",
                description: "The more distance tears travel, the more damage they will do",
                type: "pasive",
                image: "lumpofcoal.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb85e")
            },
            {
                name: "A Quarter",
				quote: "+25 coins",
                description: "Gives Isaac 25 pennies",
                type: "pasive",
                image: "aquarter.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb85f")
            },
            {
                name: "A Snack",
				quote: "HP up",
                description: "Grants one full Red Heart container and heals 1 additional Red Heart",
                type: "pasive",
                image: "asnack.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb860")
            },
            {
                name: "Abbadon",
				quote: "Evil + DMG up + fear shot",
                description: "+1.5 damage and +0.2 speed. Grants 2 Black Hearts, converts all Red Heart Containers into Black Hearts, and adds a chance to shoot fear tears",
                type: "pasive",
                image: "abbadon.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb861")
            },
            {
                name: "Abel",
				quote: "Mirrored buddy",
                description: "Spawns a familiar that mirrors Isaac's movements and shoots towards him",
                type: "pasive",
                image: "abel.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb862")
            },
            {
                name: "Anemic",
				quote: "Toxic blood",
                description: "After Isaac is damaged, a trail of red creep will be left behind him until he leaves the current room. +1.5 range",
                type: "pasive",
                image: "anemic.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb863")
            },
            {
                name: "Ankh",
				quote: "Eternal life?",
                description: "Upon death, Isaac will respawn as ??? in the previous room, with 3 Soul Hearts",
                type: "pasive",
                image: "ankh.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb864")
            },
            {
                name: "Anti-Gravity",
				quote: "Anti-gravity tears + tears up",
                description: "Tears float in position until firing ceases, after which they will fly off in the direction they were shot in. +1 Fire Rate",
                type: "pasive",
                image: "anti-gravity.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb865")
            },
            {
                name: "Aquarius",
				quote: "Trail of tears",
                description: "A trail of blue creep is left behind Isaac, which damages enemies. The creep inherits most of Isaacs tear effects, like homing",
                type: "pasive",
                image: "aquarius.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb866")
            },
            {
                name: "Aries",
				quote: "Ramming speed",
                description: "+0.25 Speed. Running into enemies while at a high speed will deal damage, and also prevents Isaac from taking contact damage while moving at high speed",
                type: "pasive",
                image: "aries.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb867")
            },
            {
                name: "A Pony",
				quote: "Flight + dash attack",
                description: "Passively grants flight and increases speed to 1.5. Upon use, Isaac charges in the direction the pony is facing, giving invulnerability during the charge and dealing damage to enemies hit",
                type: "active",
                image: "apony.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb868")
            },
            {
                name: "Anarchist Cookbook",
				quote: "Summon bombs",
                description: "Spawns six Troll Bombs around the room",
                type: "active",
                image: "anarchistcookbook.png",
                _id: new mongoose.Types.ObjectId("6634aa90e5fc477b76acb8af")
            }
		]);
		console.log("Default items created");
	} catch (error) {
		console.log(error);
	} finally {
		mongoose.disconnect();
	}
}