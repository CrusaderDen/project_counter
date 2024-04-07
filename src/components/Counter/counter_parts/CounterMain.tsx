import React, {Dispatch, SetStateAction} from 'react';
import s from '../Counter.module.css'
import {Button} from "./Button";
import {CounterStateType} from "../Counter";

type CounterMainPropsType = {
    counterState: CounterStateType
    setCounterState: Dispatch<SetStateAction<CounterStateType>>
}

export const CounterMain = ({counterState, setCounterState}: CounterMainPropsType) => {

    const doIncrement = () => {
        setCounterState((prevState: CounterStateType) => {
            const updatedCount = prevState.count + 1;
            const reachedMaxLimit = updatedCount >= prevState.maxValue;
            return {...prevState, count: updatedCount, reachedMaxLimit};
        });
    }
    const doReset = () => {
        setCounterState({...counterState, count: counterState.startValue, reachedMaxLimit: false})
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


