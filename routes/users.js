import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import User from "../models/User.js";
import { createError } from "../utils/error.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/check-auth", verifyToken, (req, res, next) => {
    res.json({
        message: "You are authenticated"
    })
})

//UPDATE
router.put("/:id", updateUser);

//DELETE
router.delete("/:id", deleteUser)

//GET
router.get("/:id", getUser);

//GET ALL
router.get("/", getUsers);

export default router;