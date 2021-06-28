import React, {FC} from 'react';
import {useSelector, RootStateOrAny} from "react-redux";
import bitcoin from '../../../assets/bitcoin.svg'

import './Header.css'

const Header: FC = () => {

    const price = useSelector((state: RootStateOrAny) => state.volume.value)
    const cash = useSelector((state: RootStateOrAny) => state)
    console.log(cash)
    return (
        <header>
            <div><img src={bitcoin} alt="bitcoin-logo"/><h4>Bitcoin Frenzy</h4></div>
            <div>1 bitcoin = {price}$</div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div>cash$</div>
                <div>7 Bitcoins</div>
            </div>
        </header>
    );
};

export default Header;
