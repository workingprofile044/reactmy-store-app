import React from 'react';

function ShopItem({ item }) {
    return (
        <div className="shop-item">
            <img src={item.img} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.color}</p>
            <p>${item.price}</p>
            <button>Add to cart</button>
        </div>
    );
}

export default ShopItem;
