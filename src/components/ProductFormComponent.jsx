import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductComponent = () => {
    const productNames = ['Corsair K65 RGB', 'Corsair Vengeance LPX', 'Corsair H100i'];
    const productPrices = [130, 80, 150];

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const handleChange = (event) => {
        setSelectedIndex(event.target.value);
        setQuantity(0);
    };

    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    const decreaseQuantity = () => {
        setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
    };

    return (
        <div className="product-component">
            <h2>Select a Product</h2>
            <select value={selectedIndex} onChange={handleChange}>
                {productNames.map((name, index) => (
                    <option key={index} value={index}>
                        {name}
                    </option>
                ))}
            </select>

            <div className="quantity-control">
                <button onClick={decreaseQuantity}>-</button>
                <span>Quantity: {quantity}</span>
                <button onClick={increaseQuantity}>+</button>
            </div>

            <h3>
                {productNames[selectedIndex]}: ${productPrices[selectedIndex].toFixed(2)}
            </h3>
        </div>
    );
};

ProductComponent.propTypes = {
};

export default ProductComponent;
