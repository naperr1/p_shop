import express from "express";
const router = express.Router();

import {
  addOrderItems,
  getOrders,
  getMyOrder,
  updateOrderToDelivered,
  getOrderById,
  updateOrderToPaid,
} from "../controller/orderController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders);
router.route("/mine").get(protect, getMyOrder);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);
router.route("/:id/deliver").put(protect, admin, updateOrderToDelivered);

export default router;
