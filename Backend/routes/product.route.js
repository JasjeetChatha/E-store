import express from "express";
import multer from "multer";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from "../Controller/product.controller.js";
import {getAllUsers,getUserById,
  addNewUser,deleteUser
} from "../Controller/user.controller.js"
// Configure multer for file upload (memory storage for base64)
const storage = multer.memoryStorage();

const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Please upload only image files'), false);
    }
  }
});

const router = express.Router();
// GET all products
router.get("/", getAllProducts);

// GET one product by ID
router.get("/:id", getProductById);

// CREATE a product with image upload
router.post("/", upload.single('image'), createProduct);

// UPDATE a product with optional image upload
router.put("/:id", upload.single('image'), updateProduct);

// DELETE a product
router.delete("/:id", deleteProduct);

export default router;