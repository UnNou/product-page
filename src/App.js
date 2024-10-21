import React from 'react';
import Header from './components/HeaderComponent';
import vaahtera from './components/vaahtera.webp';
import ProductComponent from './components/ProductFormComponent';

function App() {
  return (
      <div className="App">
          <Header image={vaahtera} title="My product page" />
          <ProductComponent />
      </div>
  );
}
export default App;
