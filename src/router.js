import { Router } from "express"
import userRouter from './entities/user/router.js'
import authRouter from './entities/auth/router.js'
import characterRouter from './entities/character/router.js'
import itemRouter from './entities/item/router.js'
import pickupRouter from './entities/pickup/router.js'
import achievementRouter from './entities/achievement/router.js'
import markRouter from './entities/mark/router.js'
import publicRouter from './database/public_router.js'

const router = Router();

// Healthy route to know server status
router.get('/healthy', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is healthy :D"
    })
})

router.use('/public', publicRouter);
router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/characters', characterRouter);
router.use('/items', itemRouter);
router.use('/pickups', pickupRouter);
router.use('/achievements', achievementRouter);
router.use('/marks', markRouter);

export default router;