const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const { createResturantController, getAllResturantController ,getResturantByIdController, deleteResturantController} = require("../controllers/resturantControllers");

const router = express.Router();

// routes
// CREATE RESTAURANT || POST
router.post("/create",authMiddleware,createResturantController);

//GET ALL RESTURANT || GET
router.get("/getAll",getAllResturantController);

// GET RESTURANT BY ID || GET
router.get("/get/:id",getResturantByIdController);

// DELETE RESTAURANT
router.delete("/delete/:id",authMiddleware,deleteResturantController);

module.exports = router;