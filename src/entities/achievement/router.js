import { Router } from "express"
import { deleteAchievementById, getAllAchievements, postAchievement, updateAchievementById } from "./controller.js"

const router = Router();

router.get('/', getAllAchievements);
router.post('/', postAchievement);
router.put('/:id', updateAchievementById);
router.delete('/:id', deleteAchievementById);

export default router;