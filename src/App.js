import React, { useState } from 'react';
import Header from './components/HeaderComponent';
import vaahtera from './components/vaahtera.webp';
import ProductComponent from './components/ProductFormComponent';
import OrderInfoComponent from './components/OrderInfoComponent';
import CatFactPage from './OpenData/CatFactPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

//define and array of products -> name and prices
function App() {
  const products = [
    { name: 'Corsair K65 RGB', price: 130 },
    { name: 'Corsair Vengeance LPX', price: 80 },
    { name: 'Corsair H100i', price: 150 }
];
//useState hook to manage select product
  const [selectedProduct, setSelectedProduct] = useState({
   name: products[0].name,
   price: products[0].price,
   quantity: 1
});

// wraps the application in a router for navigation
return (
  <Router>
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cat-facts">Cat Facts</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/products" element={
          <div>
            <Header image={vaahtera} title="My product page" />
            <ProductComponent
              products={products}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
            />
            <OrderInfoComponent product={selectedProduct} />
          </div>
        } />

        <Route path="/cat-facts" element={<CatFactPage />} />
      </Routes>
    </div>
  </Router>
);
}

export default App;

{/* back-up plan, pls ingore this
  
  return (
      <div className="App">
          <Header image={vaahtera} title="My product page" />
          <ProductComponent
                products={products}
                selectedProduct={selectedProduct}
                setSelectedProduct={setSelectedProduct}
            />
          <OrderInfoComponent product={selectedProduct} /> 
      </div>
  );
}
export default App;*/}
