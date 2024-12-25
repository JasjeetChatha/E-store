import { cart } from '../Data/Data';
const express = require('express');
const app = express();

app.use(express.json());


// Add product to the cart
app.post('/cart', (req, res) => {
  const { productId, name, price, quantity, imageUrl } = req.body;
  const existingItem = cart.find(item => item.productId === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ productId, name, price, quantity, imageUrl});
  }

  res.send(cart);
});

// View the cart
app.get('/cart', (req, res) => {
  res.send(cart);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
