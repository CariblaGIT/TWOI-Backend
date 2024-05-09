import { Router } from "express"
import { deleteMarkById, getAllMarks, postMark, updateMarkById } from "./controller.js"

const router = Router();

router.get('/', getAllMarks);
router.post('/', postMark);
router.put('/:id', updateMarkById);
router.delete('/:id', deleteMarkById);

export default router;