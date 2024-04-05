import React, {useEffect, useState} from 'react';
import s from '../Counter.module.css'
import {Input} from "./Input";
import {Button} from "./Button";
import {CounterStateType} from "../Counter";

type CounterSetPropsType = {
    counterState: CounterStateType
    setCounterState: (v: CounterStateType) => void
}

export const CounterSet = ({counterState, setCounterState}: CounterSetPropsType) => {

    const [currentMax, setCurrentMax] = useState(counterState.maxValue)
    const [currentStart, setCurrentStart] = useState(counterState.startValue)

    let fullInputClassName = s.setInput
    useEffect(() => {
        if (currentStart < 0 || currentStart >= currentMax) {
            counterState.disableSet = true
            counterState.error = 'Uncorrect value'
            setCounterState({...counterState})
            fullInputClassName = fullInputClassName + ' ' + s.danger
        } else if (currentStart > 999999 || currentMax > 999999) {
            counterState.disableSet = true
            counterState.error = 'Too long number'
            setCounterState({...counterState})
            fullInputClassName = fullInputClassName + ' ' + s.danger
        } else {
            counterState.error = ''
            setCounterState({...counterState})
        }

    }, [currentMax, currentStart])


    const doSaveSet = () => {
        counterState.maxValue = currentMax
        counterState.startValue = currentStart
        counterState.count = currentStart
        counterState.reachedMaxLimit = false
        counterState.disableSet = true
        counterState.disableButtons = false
        setCounterState({...counterState})
    }


    return (
        <div className={s.counterBody}>
            <div className={s.setBody}>
                <div className={s.setInputs}>
                    <Input name={'max value'}
                           fullInputClassName={fullInputClassName}
                           value={currentMax} setValue={setCurrentMax}
                           counterState={counterState}
                           setCounterState={setCounterState}
                    />
                    <Input name={'start value'}
                           fullInputClassName={fullInputClassName}
                           value={currentStart} setValue={setCurrentStart}
                           counterState={counterState}
                           setCounterState={setCounterState}
                    />
                </div>
                <Button name={'set'} buttonHandler={doSaveSet} disableSet={counterState.disableSet}/>
            </div>
        </div>
    );
};

