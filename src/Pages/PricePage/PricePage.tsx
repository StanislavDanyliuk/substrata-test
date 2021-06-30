import React, {useEffect, useState} from 'react';
import Button from "../../Components/Common/Button";
import {batch, RootStateOrAny, useDispatch, useSelector} from "react-redux";

import './PricePage.css'
import {addToHistory, decrement, increment} from "../../store/reducers/reducers";

const PricePage = () => {
    const [disable, setDisable] = useState(false)
    const [warningMessage, setWarningMessage] = useState('')
    const price = useSelector((state: RootStateOrAny) => state.price.value);
    const dispatch = useDispatch();

    useEffect(() => {
        if (price === 1000) {
            setDisable(true)
            setWarningMessage('Bitcoin price cannot be below 1,000$')
        } else {
            setDisable(false)
            setWarningMessage('')
        }
    }, [price])

    return (
        <>
            <p>
                Bitcoin price is {price}$
            </p>
            <p className={'warning'}>
                {warningMessage}
            </p>
            <div>
                {/*@ts-ignore*/}
                <Button label={'Increased Bitcoin Price (+1,000)'}
                        event={(e: any) => batch(() => {
                            dispatch(addToHistory({
                                    date: new Date(Date.now()).toLocaleDateString('en-GB', {
                                        hour: "numeric",
                                        minute: 'numeric',
                                        second: "numeric"
                                    }),
                                    actionType: e.target.ariaLabel
                                })
                            )
                            dispatch(increment())
                        })}/>
                {/*@ts-ignore*/}
                <Button disabled={disable} label={'Decreased Bitcoin Price (-1,000)'}
                        event={(e: any) => batch(() => {
                            dispatch(addToHistory({
                                    date: new Date(Date.now()).toLocaleDateString('en-GB', {
                                        hour: "numeric",
                                        minute: 'numeric',
                                        second: "numeric"
                                    }),
                                    actionType: e.target.ariaLabel
                                })
                            )
                            dispatch(decrement())
                        })}/>
            </div>
        </>
    );
};

export default PricePage;
