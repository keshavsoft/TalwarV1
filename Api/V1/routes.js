import express from 'express';
import { router as routerFromMasters } from "./Masters/routes.js";

const router = express.Router();
router.use('/Masters', routerFromMasters);

export { router };