import React from 'react';
import Button from "../../Components/Common/Button";
import {batch, RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {addToHistory, buy} from "../../store/reducers/reducers";

import './BuyPage.css'

const BuyPage = () => {
    const price = useSelector((state: RootStateOrAny) => state.price.value)
    const dispatch = useDispatch()

    const warningMessage = price >= 10000 ? 'Prices are high, are you sure that you want to buy?' : 'Prices are low,buy more!';

    return (
        <>
            <p>
                Bitcoin price is {price}$
            </p>
            <p>
                {warningMessage}
            </p>
            {/*@ts-ignore*/}
            <Button name={'Purchased 1 Bitcoin'} label={'Buy 1 Bitcoin'} event={(e) => batch(() => {
                dispatch(addToHistory({
                    date: new Date(Date.now()).toLocaleDateString('en-GB', {
                        hour: "numeric",
                        minute: 'numeric',
                        second: "numeric"
                    }),
                    actionType: e.target.name
                }))
                dispatch(buy())
            })}/>
        </>
    );
};

export default BuyPage;
