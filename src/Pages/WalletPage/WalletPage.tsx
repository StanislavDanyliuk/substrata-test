import React from 'react';
import Button from "../../Components/Common/Button";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {deposit, withdraw} from "../../store/reducers/reducers";

import './WalletPage.css'

const WalletPage = () => {
    const bitcoinAmount = useSelector((state: RootStateOrAny) => state.wallet.bitcoinAmount)
    const dispatch = useDispatch()

    return (
        <>
            <p>
                Your Bitcoin Wallet
            </p>
            <p>
                You now own {bitcoinAmount} Bitcoins
            </p>
            {/*@ts-ignore*/}
            <Button label={'Deposit 100$'} event={() => dispatch(deposit())}/>
            {/*@ts-ignore*/}
            <Button label={'Withdraw 100$'} event={() => dispatch(withdraw())}/>
        </>
    );
};

export default WalletPage;
