import express from 'express';
import { router as routerFromSzMast } from "./SzMast/endpoints.js";

const router = express.Router();
router.use('/SzMast', routerFromSzMast);

export { router };