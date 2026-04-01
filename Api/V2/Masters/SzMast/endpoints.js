import express from 'express';
import { getFunc } from "./controller.js";

const router = express.Router();
router.use('/ShowAll', getFunc);

export { router };
