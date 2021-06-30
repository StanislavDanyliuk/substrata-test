import React, {useEffect, useState} from 'react';
import Button from "../../Components/Common/Button";
import {batch, RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {addToHistory, deposit, withdraw} from "../../store/reducers/reducers";

import './WalletPage.css'

const WalletPage = () => {
    const [disable, setDisable] = useState(false)
    const [warningMessage, setWarningMessage] = useState('')
    const bitcoinAmount = useSelector((state: RootStateOrAny) => state.wallet.bitcoinAmount)
    const cashAmount = useSelector((state: RootStateOrAny) => state.wallet.cashAmount)
    const dispatch = useDispatch()

    useEffect(() => {
        if (cashAmount === 0) {
            setDisable(true)
            setWarningMessage('You can`t withdraw due your cash is 0$')
        } else {
            setDisable(false)
            setWarningMessage('')
        }

    }, [cashAmount])


    return (
        <>
            <p>
                Your Bitcoin Wallet
            </p>
            <p>
                You now own {bitcoinAmount} Bitcoins
            </p>
            <p className='warning'>
                {warningMessage}
            </p>
            {/*@ts-ignore*/}
            <Button label={'Deposit 100$'} event={(e) => batch(() => {
                dispatch(addToHistory({
                    date: new Date(Date.now()).toLocaleDateString('en-GB', {
                        hour: "numeric",
                        minute: 'numeric',
                        second: "numeric"
                    }),
                    actionType: e.target.ariaLabel
                }))
                dispatch(deposit())
            })}/>
            {/*@ts-ignore*/}
            <Button label={'Withdraw 100$'} disabled={disable} event={(e) => batch(() => {
                dispatch(addToHistory({
                    date: new Date(Date.now()).toLocaleDateString('en-GB', {
                        hour: "numeric",
                        minute: 'numeric',
                        second: "numeric"
                    }),
                    actionType: e.target.ariaLabel
                }))
                dispatch(withdraw())
            })}/>
        </>
    );
};

export default WalletPage;
