import { Router } from "express"
import userRouter from './entities/user/router.js'
import characterRouter from './entities/character/router.js'
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
router.use('/users', userRouter);
router.use('/characters', characterRouter);

export default router;