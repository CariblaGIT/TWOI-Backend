import { Router } from "express"
import { deleteUserById, getProfile, getUserAchievemnts, getUserCharacters, getUserMarks, getUsers, giveOrRemoveAchievement, giveOrRemoveCharacter, giveOrRemoveMark, modifyProfile, suspendUser } from "./controller.js"

const router = Router();

router.get('/', getUsers);
router.get('/profile', getProfile);
router.get('/marks', getUserMarks);
router.get('/achievements', getUserAchievemnts);
router.get('/characters', getUserCharacters);
router.put('/profile', modifyProfile);
router.put('/mark/:id', giveOrRemoveMark);
router.put('/achievement/:id', giveOrRemoveAchievement);
router.put('/character/:id', giveOrRemoveCharacter);
router.put('/suspend', suspendUser);
router.delete('/:id', deleteUserById);

export default router;