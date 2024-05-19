import { Router } from "express"
import { deleteAchievementById, getAllAchievements, postAchievement, updateAchievementById } from "./controller.js"
import { auth } from "../../core/middlewares/auth.js";
import { verifySuperAdmin } from "../../core/middlewares/isSuperAdmin.js";

const router = Router();

router.get('/', getAllAchievements);
router.post('/', auth, verifySuperAdmin, postAchievement);
router.put('/:id', auth, verifySuperAdmin, updateAchievementById);
router.delete('/:id', auth, verifySuperAdmin, deleteAchievementById);

export default router;