import React, { useState } from "react";
import ReactDOM from "react-dom";

const Basket = React.lazy(() => import('mf-basket/Basket'))
const ProductList = React.lazy(() => import('mf-productList/ProductList'))

import "./index.css";
import './app.css';
import './productList.css';

const App = () => {
    const [selected, setSelected] = useState([]);

    const onBuyItem = item => {
        setSelected(curr => [...curr, item]);
    };

    return (
        <div className="app">
            <h1>Pizza Store</h1>
            <div className="app-content">
                <section>
                    <React.Suspense fallback={<div>....loading product list</div>}>
                        <ProductList
                            onBuyItem={onBuyItem}
                        />
                    </React.Suspense>
                </section>
                <section>
                    {
                        selected.length > 0 &&
                        <React.Suspense fallback={<div>....loading basket</div>}>
                            <Basket
                                items={selected}
                                onClear={() => setSelected([])}
                            />
                        </React.Suspense>
                    }
                </section>
            </div>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById("app"));
