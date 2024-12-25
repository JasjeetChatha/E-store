const newProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    desc: "",
    image: "",
    brand: "",
    type: "",
  });
  const handleAddProduct = (e) => { }
  
  return (
    <div>
      <form>
        <label>Product Name:</label>
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={(e) => etNewProduct({...newProduct, name: e.target.value})}
          required
        />
        <label>Product Price:</label>
        <input
          type="text"
          name="price"
          value={newProduct.price}
          onChange={(e) => etNewProduct({...newProduct, price: e.target.value})}
          required
        />
        <label>Product Description:</label>
        <input
          type="text"
          name="desc"
          value={newProduct.description}
          onChange={(e) => etNewProduct({...newProduct, description: e.target.value})}
          required
        />
        <label>Product Image:</label>
        <input
          type="file"
          name="image"
          value={newProduct.image}
          onChange={(e) => etNewProduct({...newProduct, image: e.target.value})}
          required
        />
        <label>Product Brand:</label>
        <input
          type="text"
          name="brand"
          value={newProduct.brand}
          onChange={(e) => etNewProduct({...newProduct, brand: e.target.value})}
          required
        />
        <label>Product Type:</label>
        <input
          type="text"
          name="type"
          value={newProduct.type}
          onChange={(e) => etNewProduct({...newProduct, type: e.target.value})}
          required
        />
        <button type="add" onClick={handleAddProduct}>Add</button>
      </form>
    </div>
  );
};
export default newProduct;
