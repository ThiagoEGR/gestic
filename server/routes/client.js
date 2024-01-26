import express from "express";
import {
  getProjects,
  getCollaborators,
  getAllocations,
  getPartners,
} from "../controllers/client.js";

const router = express.Router();

router.get("/projects", getProjects);
router.get("/collaborators", getCollaborators);
router.get("/allocations", getAllocations);
router.get("/partners", getPartners);

export default router;
