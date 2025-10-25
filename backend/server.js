const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = 5000;

const products = [
  { id: 1, name: 'Classic Tee', price: 19.99 },
  { id: 2, name: 'Running Shoes', price: 89.50 },
  { id: 3, name: 'Denim Jacket', price: 129.00 },
  { id: 4, name: 'Sneakers', price: 75.25 }
];

app.get('/api/products', (req, res) => res.json(products));

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
