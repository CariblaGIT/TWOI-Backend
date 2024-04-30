import publicRouter from './public_router.js'
import { Router } from "express";

const router = Router();

// Healthy route to know server status
router.get('/healthy', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is healthy :D"
    })
})

router.use('/public', publicRouter);

export default router;