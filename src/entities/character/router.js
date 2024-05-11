import { Router } from "express"
import { deleteCharacterById, getAllCharacters, postCharacter, updateCharacterById } from "./controller.js"

const router = Router();

router.get('/', getAllCharacters);
router.post('/', postCharacter);
router.put('/:id', updateCharacterById);
router.delete('/:id', deleteCharacterById);

export default router;