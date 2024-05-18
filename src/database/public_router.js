import path from "path";
import express from 'express';
import { Router } from "express";
import { fileURLToPath } from 'url';

// Calling to local files for getting imgs from frontend
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

// Defining routes for methods
router.use('/items', express.static(path.join(__dirname,"../../public/img_items")));
router.use('/characters', express.static(path.join(__dirname,"../../public/img_characters/")));
router.use('/marks', express.static(path.join(__dirname,"../../public/img_marks/")));
router.use('/achievements', express.static(path.join(__dirname,"../../public/img_achievements/")));
router.use('/pickups', express.static(path.join(__dirname,"../../public/img_pickups/")));
router.use('/avatars', express.static(path.join(__dirname,"../../public/img_avatars/")));

export default router;