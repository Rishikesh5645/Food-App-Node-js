const express = require("express");

const { getUserController, updateUserController, resetPasswordController, updatePasswordController, deleteProfileController} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//routes
// Get User || GET
router.get("/getUser",authMiddleware,getUserController);

// UPDATE PROFILE
router.put("/updateUser",authMiddleware,updateUserController);

//UPDATE PASSWORD
router.post("/updatePassword",authMiddleware,updatePasswordController);

//RESET PASSWORD
router.post("/resetPassword",authMiddleware,resetPasswordController);

// delete USER
router.delete("/deleteUser/:id", authMiddleware,deleteProfileController);

module.exports = router;