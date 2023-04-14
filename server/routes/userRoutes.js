const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
  logoutUser,
  particularUser,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, allUsers);
router.route("/:id").get(protect,particularUser);
router.route("/").post(registerUser);
router.post("/login", authUser);
router.post("/logout", protect, logoutUser);
module.exports = router;
