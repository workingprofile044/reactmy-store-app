import React from 'react';

function ShopCard({ card }) {
    return (
        <div className="shop-card">
            <img src={card.img} alt={card.name} />
            <h2>{card.name}</h2>
            <p>{card.color}</p>
            <p>${card.price}</p>
            <button>Add to cart</button>
        </div>
    );
}

export default ShopCard;
