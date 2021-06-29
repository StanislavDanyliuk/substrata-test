import React, {FC} from 'react';
import {RootStateOrAny, useSelector} from "react-redux";
import bitcoin from '../../../assets/bitcoin.svg'

import './Header.css'

const Header: FC = () => {
    const price = useSelector((state: RootStateOrAny) => state.price.value)
    const cashAmount = useSelector((state: RootStateOrAny) => state.wallet.cashAmount)
    const bitcoinAmount = useSelector((state: RootStateOrAny) => state.wallet.bitcoinAmount)

    return (
        <header>
            <div><img src={bitcoin} alt="bitcoin-logo"/><h4>Bitcoin Frenzy</h4></div>
            <div>1 bitcoin = {price}$</div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div>{cashAmount}$</div>
                <div>{bitcoinAmount} Bitcoins</div>
            </div>
        </header>
    );
};

export default Header;
