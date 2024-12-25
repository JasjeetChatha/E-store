//GET ALL PRODUCTS
export const getAllProducts = async (req, res) => {
    try {
      const products = await Product.find();
      return res.status(200).json({success: true, data: products});
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({success: false, message: "Server error"});
    }
  };
//CREATE A PRODUCT
  export const createProduct = async (req, res) => {
    const product = req.body;
    if (
      !product.name ||
      !product.price ||
      !product.imageUrl ||
      !product.brand ||
      !product.type
    ) {
      return res
        .status(400)
        .json({success: false, message: "please provide all the fields"});
    }
    const newProduct = new Product(product);
    try {
      await newProduct.save();
      res
        .status(201)
        .json({success: true, message: "Product Added Successfully"});
    } catch (error) {
      console.error(error.message);
      res.status(500).json({success: true, message: "server error"});
    }
  }
  //UPDATE A PRODUCT
  export const updateProduct= async (req, res) => {
    const {id} = req.params;
    const product = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({success: false, message: "Product Not Found"});
    }
    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, product, {
        new: true,
      });
      return res.status(200).json({success: true, data: updatedProduct});
    } catch (error) {
      return res
        .status(500)
        .json({success: false, message: "Product was not updated"});
    }
  }
  //DELETE A PRODUCT
  export const deleteProduct=async (req, res) => {
    const {id} = req.params;
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json({success: true, message: "Product is deleted"});
    } catch (error) {
      res.status(500).json({success: false, message: "server error"});
    }
  }