import React, {useEffect, useState} from 'react';
import Button from "../../Components/Common/Button";
import {batch, RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {addToHistory, buy} from "../../store/reducers/reducers";

import './BuyPage.css'

const BuyPage = () => {
    const [disable, setDisable] = useState(false)
    const [amountWarningMessage, setAmountWarningMessage] = useState('')


    const price = useSelector((state: RootStateOrAny) => state.price.value)
    const cashAmount = useSelector((state: RootStateOrAny) => state.wallet.cashAmount)
    const dispatch = useDispatch()

    const warningMessage = price >= 10000 ? 'Prices are high, are you sure that you want to buy?' : 'Prices are low,buy more!';

    useEffect(() => {
        if (cashAmount < price) {
            setDisable(true)
            setAmountWarningMessage('You don`t have enough cash to buy 1 Bitcoin')
        } else {
            setDisable(false)
            setAmountWarningMessage('')
        }
    }, [cashAmount, price])

    return (
        <>
            <p>
                Bitcoin price is {price}$
            </p>
            <p>
                {warningMessage}
            </p>
            <p className='warning'>
                {amountWarningMessage}
            </p>

            {/*@ts-ignore*/}
            <Button name={'Purchased 1 Bitcoin'} disabled={disable} label={'Buy 1 Bitcoin'} event={(e) => batch(() => {
                dispatch(addToHistory({
                    date: new Date(Date.now()).toLocaleDateString('en-GB', {
                        hour: "numeric",
                        minute: 'numeric',
                        second: "numeric"
                    }),
                    actionType: e.target.name
                }))
                dispatch(buy(price))
            })}/>
        </>
    );
};

export default BuyPage;
