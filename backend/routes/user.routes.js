import express from "express"
import { getUserProfileandRepos } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile/:username",getUserProfileandRepos)


export default router; 