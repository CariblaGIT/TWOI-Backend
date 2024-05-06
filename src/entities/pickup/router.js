import { Router } from "express"
import { deletePickupById, getAllPickups, getAllPickupsFromType, postPickup, updatePickupById } from "./controller.js"

const router = Router();

router.get('/', getAllPickups);
router.get('/:type', getAllPickupsFromType);
router.post('/', postPickup);
router.put('/:id', updatePickupById);
router.delete('/:id', deletePickupById);

export default router;