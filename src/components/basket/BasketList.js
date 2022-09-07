import React from 'react';
import ProductList from "../product/ProductList";
import BasketList from "../basket/BasketList";


function Main(props) {


    return (
        <div>
            <ProductList/>
            <BasketList/>
        </div>
    );
}

export default Main;