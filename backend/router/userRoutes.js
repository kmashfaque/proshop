import express from "express";
const router = express.Router();
import { authUser } from "../controllers/userController.js";
import { getUserProfile } from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
import {
  registerUser,
  getUserById,
  updateUser,
} from "../controllers/userController.js";
import {
  updateUserProfile,
  getUsers,
  deleteUser,
} from "../controllers/userController.js";

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default router;
