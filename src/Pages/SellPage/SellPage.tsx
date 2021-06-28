import React from 'react';
import Button from "../../Components/Common/Button";

import './SellPage.css'

const SellPage = () => {
    return (
        <>
            <p>
                Bitcoin price is 1000$
            </p>
            <p>
                Price are high, sell now!
            </p>
            <p>
                Prices are low, are you sure you want to sell?
            </p>
            {/*@ts-ignore*/}
            <Button label={'Sell 1 Bitcoin'} event={() => alert('Sell 1 Bitcoin')}/>
        </>
    );
};

export default SellPage;
