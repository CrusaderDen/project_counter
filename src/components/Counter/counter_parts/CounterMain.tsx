import React, {Dispatch, SetStateAction, useState} from 'react';
import s from '../Counter.module.css'
import {Button} from "./Button";
import {CounterStateType} from "../Counter";

type CounterMainPropsType = {
    counterState: CounterStateType
    setCounterState: Dispatch<SetStateAction<CounterStateType>>
}

export const CounterMain = ({counterState, setCounterState}: CounterMainPropsType) => {

    const [isAnimating, setIsAnimating] = useState(false)

    const startNumberAnimate = () => {
        if (!isAnimating) {
            setIsAnimating(true)
        }
    }

    const handleTransitionEnd = () => {
        setIsAnimating(false)
        setCounterState({...counterState, count: counterState.count + 1})
    }


    const doIncrement = () => {
        startNumberAnimate()
        setCounterState((prevState: CounterStateType) => {
            const updatedCount = prevState.count + 1;
            const reachedMaxLimit = updatedCount >= prevState.maxValue;
            return {...prevState, reachedMaxLimit};
        });
    }
    const doReset = () => {
        setCounterState({...counterState, count: counterState.startValue, reachedMaxLimit: false})
    }

    const maxLimitClass = counterState.reachedMaxLimit ? s.outputResultMax : ''

    return (
        <div className={s.counterBody}>
            {counterState.error
                ? <div className={s.display}>
                    <div className={`${s.error}`}>{counterState.error}</div>
                </div>
                : <div className={s.display}>
                    <div
                        className={`${s.next} ${isAnimating ? s.nextMove : ''} ${maxLimitClass}`}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        {counterState.count + 1}
                    </div>
                    <div className={`${s.current} ${isAnimating ? s.currentMove : ''} ${maxLimitClass}`}>{counterState.count}</div>
                </div>
            }


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


