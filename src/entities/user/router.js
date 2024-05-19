import { Router } from "express"
import { deleteUserById, getProfile, getUserAchievemnts, getUserCharacters, getUserMarks, getUsers, giveOrRemoveAchievement, giveOrRemoveCharacter, giveOrRemoveMark, modifyProfile, suspendUser } from "./controller.js"
import { auth } from "../../core/middlewares/auth.js";
import { verifySuperAdmin } from "../../core/middlewares/isSuperAdmin.js";

const router = Router();

router.get('/', auth, verifySuperAdmin, getUsers);
router.get('/profile', auth, getProfile);
router.get('/marks', auth, getUserMarks);
router.get('/achievements', auth, getUserAchievemnts);
router.get('/characters', auth, getUserCharacters);
router.put('/profile', auth, modifyProfile);
router.put('/mark/:id', auth, giveOrRemoveMark);
router.put('/achievement/:id', auth, giveOrRemoveAchievement);
router.put('/character/:id', auth, giveOrRemoveCharacter);
router.put('/suspend', auth, suspendUser);
router.delete('/:id', auth, verifySuperAdmin, deleteUserById);

export default router;