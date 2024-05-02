import { Router } from "express"
import userRouter from './user_router.js'
import publicRouter from './public_router.js'

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

export default router;