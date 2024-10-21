import React from 'react';
import Header from './components/HeaderComponent';
import vaahtera from './components/vaahtera.webp';

function App() {
  return (
      <div className="App">
          <Header image={vaahtera} title="My product page" />
      </div>
  );
}
export default App;
