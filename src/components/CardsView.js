import React from 'react';
import ShopCard from './ShopCard';

function CardsView({ cards }) {
    return (
        <div className="cards-view">
            {cards.map(card => (
                <ShopCard key={card.name} card={card} />
            ))}
        </div>
    );
}

export default CardsView;
