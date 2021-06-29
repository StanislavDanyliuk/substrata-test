import React from 'react';
import Button from "../../Components/Common/Button";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {addToHistory, sell} from "../../store/reducers/reducers";

import './SellPage.css'

const SellPage = () => {
    const price = useSelector((state: RootStateOrAny) => state.price.value)
    const dispatch = useDispatch()

    const warningMessage = price >= 10000 ? 'Prices are high, sell now!' : 'Prices are low,are you sure you want to sell?';

    const handleDispatch = (element: any) => {
        dispatch(addToHistory({
            date: new Date(Date.now()).toLocaleDateString('en-GB', {
                hour: "numeric",
                minute: 'numeric',
                second: "numeric"
            }),
            actionType: element.name
        }))
        dispatch(sell())
    };

    return (
        <>
            <p>
                Bitcoin price is {price}$
            </p>
            <p>
                {warningMessage}
            </p>
            {/*@ts-ignore*/}
            <Button name={'Sold 1 Bitcoin'} label={'Sell 1 Bitcoin'} event={(e) => handleDispatch(e.target)}/>
        </>
    );
};

export default SellPage;
