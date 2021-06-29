import React from 'react';
import Button from "../../Components/Common/Button";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {addToHistory, deposit, withdraw} from "../../store/reducers/reducers";

import './WalletPage.css'

const WalletPage = () => {
    const bitcoinAmount = useSelector((state: RootStateOrAny) => state.wallet.bitcoinAmount)
    const dispatch = useDispatch()

    const handleDispatch = (element: any) => {
        dispatch(addToHistory({
            date: new Date(Date.now()).toLocaleDateString('en-GB', {
                hour: "numeric",
                minute: 'numeric',
                second: "numeric"
            }),
            actionType: element.ariaLabel
        }))
        element.name === 'deposit' ? dispatch(deposit()) : dispatch(withdraw())
    };

    return (
        <>
            <p>
                Your Bitcoin Wallet
            </p>
            <p>
                You now own {bitcoinAmount} Bitcoins
            </p>
            {/*@ts-ignore*/}
            <Button label={'Deposit 100$'} name={'deposit'} event={(e) => handleDispatch(e.target)}/>
            {/*@ts-ignore*/}
            <Button label={'Withdraw 100$'} name={'withdraw'} event={(e) => handleDispatch(e.target)}/>
        </>
    );
};

export default WalletPage;
