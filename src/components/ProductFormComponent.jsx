import React from 'react';

//allows to select a product and adjust its quantity
const ProductComponent = ({ products, selectedProduct, setSelectedProduct }) => {

    //halde the change fo select a product from the dropdown
    const handleProductChange = (event) => {
        const selectedIndex = event.target.value;
        const selectedProduct = products[selectedIndex];
        setSelectedProduct({ ...selectedProduct, quantity: 1 });
    };

    // update the quantity of the selected product ensuring it's non-negative
    const handleQuantityChange = (change) => {
        setSelectedProduct((prev) => ({
            ...prev,
            quantity: Math.max(0, prev.quantity + change) 
        }));
    };

    return (
        <div className="product-component">
            <h2>Select a Product</h2>
            
            <select value={products.findIndex(p => p.name === selectedProduct.name)} onChange={handleProductChange}>
                {products.map((product, index) => (
                    <option key={index} value={index}>
                        {product.name}
                    </option>
                ))}
            </select>

            <div className="quantity-control">
                <button onClick={() => handleQuantityChange(-1)}>-</button>
                <span>Quantity: {selectedProduct.quantity}</span>
                <button onClick={() => handleQuantityChange(1)}>+</button>
            </div>
        </div>
    );
};

export default ProductComponent;
