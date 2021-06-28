import React from 'react';
import Button from "../../Components/Common/Button";

import './WalletPage.css'

const WalletPage = () => {
    return (
        <>
            <p>
                Your Bitcoin Wallet
            </p>
            <p>
                You now own 7 Bitcoins
            </p>
            {/*@ts-ignore*/}
            <Button label={'Deposit 100$'} event={() => alert('Deposit 100$')}/>
            {/*@ts-ignore*/}
            <Button label={'Withdraw 100$'} event={() => alert('Withdraw 100$')}/>
        </>
    );
};

export default WalletPage;
