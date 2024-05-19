import { Router } from "express"
import { deleteItemById, getAllItems, postItem, updateItemById } from "./controller.js"
import { auth } from "../../core/middlewares/auth.js";
import { verifySuperAdmin } from "../../core/middlewares/isSuperAdmin.js";

const router = Router();

router.get('/', getAllItems);
router.post('/', auth, verifySuperAdmin, postItem);
router.put('/:id', auth, verifySuperAdmin, updateItemById);
router.delete('/:id', auth, verifySuperAdmin, deleteItemById);

export default router;