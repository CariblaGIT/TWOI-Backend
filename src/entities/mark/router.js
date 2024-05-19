import { Router } from "express"
import { deleteMarkById, getAllMarks, postMark, updateMarkById } from "./controller.js"
import { auth } from "../../core/middlewares/auth.js";
import { verifySuperAdmin } from "../../core/middlewares/isSuperAdmin.js";

const router = Router();

router.get('/', auth, getAllMarks);
router.post('/', auth, verifySuperAdmin, postMark);
router.put('/:id', auth, verifySuperAdmin, updateMarkById);
router.delete('/:id', auth, verifySuperAdmin, deleteMarkById);

export default router;