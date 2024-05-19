import { Router } from "express"
import { deleteCharacterById, getAllCharacters, postCharacter, updateCharacterById } from "./controller.js"
import { auth } from "../../core/middlewares/auth.js";
import { verifySuperAdmin } from "../../core/middlewares/isSuperAdmin.js";

const router = Router();

router.get('/', getAllCharacters);
router.post('/', auth, verifySuperAdmin, postCharacter);
router.put('/:id', auth, verifySuperAdmin, updateCharacterById);
router.delete('/:id', auth, verifySuperAdmin, deleteCharacterById);

export default router;