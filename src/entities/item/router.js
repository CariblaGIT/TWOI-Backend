import { Router } from "express"
import { deleteItemById, getAllItems, postItem, updateItemById } from "./controller.js"

const router = Router();

router.get('/', getAllItems);
router.post('/', postItem);
router.put('/:id', updateItemById);
router.delete('/:id', deleteItemById);

export default router;