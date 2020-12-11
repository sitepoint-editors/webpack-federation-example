import React from 'react';

import Products from './products.json';

const ProductList = ({onBuyItem}) => {
    return (
        <ul>
            {
                Products.map(product => {
                    return (
                        <li key={product.id}>
                                <span>
                                    {product.name}
                                </span>
                            <span>
                                    $ {product.price}
                                </span>
                            <button
                                onClick={() => onBuyItem(product)}
                            >
                                Buy
                            </button>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default ProductList;

