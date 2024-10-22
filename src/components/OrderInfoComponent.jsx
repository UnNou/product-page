import React from 'react';

//displays the summary of the selected product order
const OrderInfoComponent = ({ product }) => {
    const { name, price, quantity } = product;
    const totalPrice = price * quantity;

    return (
        <div className="order-info">
            <h2>Order Summary</h2>
            <p>Product: {name}</p>
            <p>Price: ${price.toFixed(2)}</p>
            <p>Quantity: {quantity}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
    );
};

export default OrderInfoComponent;
