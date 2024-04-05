import React from 'react';
import s from '../Counter.module.css'
import {Button} from "./Button";
import {CounterStateType} from "../Counter";

type CounterMainPropsType = {
    counterState: CounterStateType
    setCounterState: (v: CounterStateType) => void
}

export const CounterMain = ({counterState, setCounterState}: CounterMainPropsType) => {


    const doIncrement = () => {
        setCounterState({...counterState, count: counterState.count + 1})
    }
    const doReset = () => {
        counterState.count = counterState.startValue
        counterState.reachedMaxLimit = false
        setCounterState({...counterState})
    }

    const fullOutputResultClass = counterState.reachedMaxLimit ? s.outputResult + ' ' + s.outputResultMax : s.outputResult

    return (
        <div className={s.counterBody}>
            {counterState.error
                ? <div className={fullOutputResultClass + ' ' + s.error}>{counterState.error}</div>
                : <div className={fullOutputResultClass}>{counterState.count}</div>}

            <div className={s.counterBodyButtons}>
                <Button
                    name={'+'}
                    buttonHandler={doIncrement}
                    reachedMaxLimit={counterState.reachedMaxLimit}
                    disableButtons={counterState.disableButtons}
                />
                <Button name={'reset'}
                        buttonHandler={doReset}
                        disableButtons={counterState.disableButtons}
                />
            </div>
        </div>
    );
};


