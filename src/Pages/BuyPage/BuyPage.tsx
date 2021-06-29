import React from 'react';
import Button from "../../Components/Common/Button";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {addToHistory, buy} from "../../store/reducers/reducers";

import './BuyPage.css'

const BuyPage = () => {
    const price = useSelector((state: RootStateOrAny) => state.price.value)
    const dispatch = useDispatch()

    const warningMessage = price >= 10000 ? 'Prices are high, are you sure that you want to buy?' : 'Prices are low,buy more!';

    const handleDispatch = (element: any) => {
        dispatch(addToHistory({
            date: new Date(Date.now()).toLocaleDateString('en-GB', {
                hour: "numeric",
                minute: 'numeric',
                second: "numeric"
            }),
            actionType: element.name
        }))
        dispatch(buy())
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
            <Button name={'Purchased 1 Bitcoin'} label={'Buy 1 Bitcoin'} event={(e) => handleDispatch(e.target)}/>
        </>
    );
};

export default BuyPage;
