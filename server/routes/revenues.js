import express from "express";
import { getRevenues } from "../controllers/revenues.js";

const router = express.Router();

router.get("/revenues", getRevenues);

export default router;
