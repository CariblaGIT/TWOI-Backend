import path from "path";
import express from 'express';
import { Router } from "express";
import { fileURLToPath } from 'url';

// Calling to local files for getting imgs from frontend
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

// Defining routes for methods
router.use('/public/items', express.static(path.join(__dirname,"../../public/img_items")));
router.use('/public/characters', express.static(path.join(__dirname,"../../public/img_characters/")));
router.use('/public/marks', express.static(path.join(__dirname,"../../public/img_marks/")));
router.use('/public/achievements', express.static(path.join(__dirname,"../../public/img_achievements/")));
router.use('/public/pickups', express.static(path.join(__dirname,"../../public/img_pickups/")));
router.use('/public/avatars', express.static(path.join(__dirname,"../../public/img_avatars/")));

export default router;