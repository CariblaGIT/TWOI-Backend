import { Router } from "express"
import { deletePickupById, getAllPickups, getAllPickupsFromType, postPickup, updatePickupById } from "./controller.js"
import { auth } from "../../core/middlewares/auth.js";
import { verifySuperAdmin } from "../../core/middlewares/isSuperAdmin.js";

const router = Router();

router.get('/', getAllPickups);
router.get('/:type', getAllPickupsFromType);
router.post('/', auth, verifySuperAdmin, postPickup);
router.put('/:id', auth, verifySuperAdmin, updatePickupById);
router.delete('/:id', auth, verifySuperAdmin, deletePickupById);

export default router;