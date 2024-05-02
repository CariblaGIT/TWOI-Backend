import { Router } from "express"
import { deleteUserById, getProfile, getUserAchievemnts, getUserCharacters, getUserMarks, getUsers, giveOrRemoveAchievement, giveOrRemoveCharacter, giveOrRemoveMark, modifyProfile } from "../entities/user/controller.js"

const router = Router();

router.get('/', getUsers);
router.get('/profile', getProfile);
router.get('/:id/marks', getUserMarks);
router.get('/:id/achievements', getUserAchievemnts);
router.get('/:id/characters', getUserCharacters);
router.put('/profile', modifyProfile);
router.put('/mark/:id', giveOrRemoveMark);
router.put('/achievement/:id', giveOrRemoveAchievement);
router.put('/character/:id', giveOrRemoveCharacter);
router.delete('/:id', deleteUserById);

export default router;