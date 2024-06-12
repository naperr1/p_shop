import express from "express";
const router = express.Router();

import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUsers,
  getUserById,
  updateUser,
} from "../controller/userController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/logout", logoutUser);
router.post("/auth", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .delete(protect, admin, deleteUsers)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default router;
