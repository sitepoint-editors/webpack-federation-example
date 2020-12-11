import React from 'react';
import styled from 'styled-components';
import { reduce, pluck, add, map } from 'ramda';

const StyledBasket = styled.div`
  height: 150px;
  width: 200px;
  border: 10px solid pink;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const totalPrice = items => {
    return reduce(
        add,
        0,
        map(parseFloat, pluck('price', items))
    );
}

const Basket = ({ items, onClear }) => {
    return (
        <StyledBasket>
            <h3>BASKET</h3>
            <span>
                PRODUCT COUNT: {items.length}
            </span>
            <span>
                TOTAL: {Number.parseFloat(totalPrice(items)).toFixed(2)}
            </span>
            <button
                onClick={onClear}
            >
                CLEAR
            </button>
        </StyledBasket>
    );
};

export default Basket;

