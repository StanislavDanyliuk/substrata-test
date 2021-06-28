import React from 'react';
import Button from "../../Components/Common/Button";

import './BuyPage.css'

const BuyPage = () => {
    return (
        <>
            <p>
                Bitcoin price is 1000$
            </p>
            <p>
                Price are low, buy more!
            </p>
            <p>
                Prices are high, are you sure that you want to buy?
            </p>
            {/*@ts-ignore*/}
            <Button label={'Buy 1 Bitcoin'} event={() => alert('Buy 1 Bitcoin')}/>
        </>
    );
};

export default BuyPage;
