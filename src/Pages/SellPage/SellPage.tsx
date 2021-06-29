import React from 'react';
import Button from "../../Components/Common/Button";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {sell} from "../../store/reducers/reducers";

import './SellPage.css'

const SellPage = () => {
    const price = useSelector((state: RootStateOrAny) => state.price.value)
    const dispatch = useDispatch()

    const warningMessage = price >= 10000 ? 'Prices are high, sell now!' : 'Prices are low,are you sure you want to sell?'

    return (
        <>
            <p>
                Bitcoin price is {price}$
            </p>
            <p>
                {warningMessage}
            </p>
            {/*@ts-ignore*/}
            <Button label={'Sell 1 Bitcoin'} event={() => dispatch(sell())}/>
        </>
    );
};

export default SellPage;
