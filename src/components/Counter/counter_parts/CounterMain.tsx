import React from 'react';
import s from '../Counter.module.css'
import {Button} from "./Button";

type CounterMainPropsType = {
    count: number
    setCount: (value: number) => void
    maxValue: number
    startValue: number
    reachedMaxLimit: boolean
    setReachedMaxLimit: (value: boolean) => void
    error: string
    setError: (v: string) => void
    disableButtons: boolean
    setDisableButtons: (v: boolean) => void
}

export const CounterMain = ({
                                count,
                                setCount,
                                maxValue,
                                startValue,
                                reachedMaxLimit,
                                setReachedMaxLimit,
                                error,
                                setError,
                                disableButtons,
                                setDisableButtons
                            }: CounterMainPropsType) => {


    const doIncrement = () => {
        setCount(count + 1)
    }
    const doReset = () => {
        setCount(startValue)
        setReachedMaxLimit(false)
    }

    const fullOutputResultClass = reachedMaxLimit ? s.outputResult + ' ' + s.outputResultMax : s.outputResult

    return (
        <div className={s.counterBody}>
            {error ? <div className={fullOutputResultClass + ' ' + s.error}>{error}</div> : <div className={fullOutputResultClass}>{count}</div>}
            {/*<div className={fullOutputResultClass}>{count}</div>*/}
            <div className={s.counterBodyButtons}>
                <Button name={'+'} buttonHandler={doIncrement} reachedMaxLimit={reachedMaxLimit} disableButtons={disableButtons}/>
                <Button name={'reset'} buttonHandler={doReset} disableButtons={disableButtons}/>
            </div>
        </div>
    );
};


