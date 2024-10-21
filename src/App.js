import React, { useState } from 'react';
import Header from './components/HeaderComponent';
import vaahtera from './components/vaahtera.webp';
import ProductComponent from './components/ProductFormComponent';
import OrderInfoComponent from './components/OrderInfoComponent';
import './App.css';

function App() {
  const products = [
    { name: 'Corsair K65 RGB', price: 130 },
    { name: 'Corsair Vengeance LPX', price: 80 },
    { name: 'Corsair H100i', price: 150 }
];
  const [selectedProduct, setSelectedProduct] = useState({
   name: products[0].name,
   price: products[0].price,
   quantity: 1
});

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
export default App;
