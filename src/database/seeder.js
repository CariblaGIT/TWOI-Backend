import mongoose from "mongoose";
import { seederDefaultCharacters } from "./seeders/seederCharacters.js";

const seeder = async () => {
    await seederDefaultCharacters();
}

seeder();