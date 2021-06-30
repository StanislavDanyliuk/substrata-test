import React, {useEffect, useState} from 'react';
import Button from "../../Components/Common/Button";
import {batch, RootStateOrAny, useDispatch, useSelector} from "react-redux";

import './SellPage.css'
import {addToHistory} from "../../store/reducers/historyReducer";
import {sell} from "../../store/reducers/cashReducer";

const SellPage = () => {
    const [disable, setDisable] = useState(false)
    const [amountWarningMessage, setAmountWarningMessage] = useState('')
    const price = useSelector((state: RootStateOrAny) => state.price.value)
    const bitcoinAmount = useSelector((state: RootStateOrAny) => state.wallet.bitcoinAmount)
    const dispatch = useDispatch()

    const warningMessage = price >= 10000 ? 'Prices are high, sell now!' : 'Prices are low,are you sure you want to sell?';

    useEffect(() => {
        if (bitcoinAmount === 0) {
            setDisable(true)
            setAmountWarningMessage('You can`t sell Bitcoin due your amount is 0')
        } else {
            setDisable(false)
            setAmountWarningMessage('')
        }
    }, [bitcoinAmount])

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
            <Button name={'Sold 1 Bitcoin'} disabled={disable} label={'Sell 1 Bitcoin'} event={(e) => batch(() => {
                dispatch(addToHistory({
                    date: new Date(Date.now()).toLocaleDateString('en-GB', {
                        hour: "numeric",
                        minute: 'numeric',
                        second: "numeric"
                    }),
                    actionType: e.target.name
                }))
                dispatch(sell(price))
            })}/>
        </>
    );
};

export default SellPage;
