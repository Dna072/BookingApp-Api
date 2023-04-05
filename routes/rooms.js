import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello, this is rooms endpoint");
})

router.get("/register", (req, res) => {
    res.send("Hello, this is room register endpoint");
})

export default router;