import express from "express";
const router = express.Router();
router.get("/",getAllUsers);
router.post("/",addNewUser);
router.delete("/:id",deleteUser);
router.get("/:id",getUserById)
export default router;