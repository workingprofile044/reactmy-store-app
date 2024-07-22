import React from 'react';
import ShopItem from './ShopItem';

function ListView({ items }) {
    return (
        <div className="list-view">
            {items.map(item => (
                <ShopItem key={item.name} item={item} />
            ))}
        </div>
    );
}

export default ListView;
