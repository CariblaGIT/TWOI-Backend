
import { seederDefaultCharacters } from "./seeders/seederCharacters.js";
import { seederDefaultItems } from "./seeders/seederItems.js";

const seeder = async () => {
    await seederDefaultCharacters();
    await seederDefaultItems();
}

seeder();