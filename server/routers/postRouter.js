import express from "express";
import {
  getContents,
  postContents,
  updateContents,
  deleteContents,
} from "../controllers/postController.js";

const router = express.Router();

router.get("/", getContents);
router.post("/", postContents);
router.patch("/:id", updateContents);
router.delete("/:id", deleteContents);

export default router;
