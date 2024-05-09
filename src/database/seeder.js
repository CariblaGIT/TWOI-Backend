
import { seederDefaultCharacters } from "./seeders/seederCharacters.js";
import { seederDefaultItems } from "./seeders/seederItems.js";
import { seederDefaultPickups } from "./seeders/seederPickups.js";
import { seederDefaultAchievements } from "./seeders/seederAchievements.js";
import { seederDefaultMarks } from "./seeders/seederMarks.js";

const seeder = async () => {
    await seederDefaultCharacters();
    await seederDefaultItems();
    await seederDefaultPickups();
    await seederDefaultAchievements();
    await seederDefaultMarks();
}

seeder();