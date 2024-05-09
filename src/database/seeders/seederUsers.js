import 'dotenv/config';
import User from '../../entities/user/User.js';
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { dbConnection } from "../../../db.js"

export const seederDefaultUsers = async () => {
    try {
		await dbConnection();
		await User.create([
			{
                username: "adminTWOI",
				email: "admin@admin.com",
                password: bcrypt.hashSync('Admin123#', 5),
                role: "admin"
			},
			{
                name: "ElLuchadorBITW",
				email: "caribla4@gmail.com",
				password: bcrypt.hashSync('superAdmin1234#', 5),
                role: "super_admin",
                characters: ["6634aa90e5fc477b76acb847"],
                achievements: ["6634aa90e5fc477b76acb893", "6634aa90e5fc477b76acb894", "6634aa90e5fc477b76acb895", "6634aa90e5fc477b76acb896", "6634aa90e5fc477b76acb897"],
                marks: ["6634aa90e5fc477b76acb8a1", "6634aa90e5fc477b76acb8a2", "6634aa90e5fc477b76acb8a3", "6634aa90e5fc477b76acb8a4", "6634aa90e5fc477b76acb8a5"]
			},
            {
                name: "user",
                email: "user@user.com",
				password: bcrypt.hashSync('User12345#', 5),
                role: "user"
            },
            {
                name: "user2",
                email: "user2@user2.com",
				password: bcrypt.hashSync('User12345#', 5),
                role: "user"
            }
		]);
		console.log("Default users created");
	} catch (error) {
		console.log(error);
	} finally {
		mongoose.disconnect();
	}
}