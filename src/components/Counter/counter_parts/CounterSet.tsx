import React, {ChangeEvent, useEffect, useState} from 'react';
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

    const updateCurrentValue = (e: ChangeEvent<HTMLInputElement>, name: string) => {
        const value = (Number(e.currentTarget.value))
        if (name === 'max value') setCurrentMax(value)
        if (name === 'start value') setCurrentStart(value)
        setCounterState({...counterState, error: '', disableSet: false, disableButtons: true})
    }

    const checkSet = () => {
        if (currentStart < 0 || currentStart >= currentMax) {
            setCounterState({...counterState, error: 'Uncorrected value', disableSet: true})
        } else if (currentStart > 999999 || currentMax > 999999) {
            setCounterState({...counterState, error: 'Too long number', disableSet: true})
        }
    }

    const saveSet = () => {

        setCounterState({
            ...counterState,
            count: currentStart,
            maxValue: currentMax,
            startValue: currentStart,
            disableButtons: false,
            disableSet: true,
            reachedMaxLimit: false
        })
    }

    useEffect(() => {
        checkSet()
    }, [currentMax, currentStart])

    return (
        <div className={s.counterBody}>
            <div className={s.setBody}>
                <div className={s.setInputs}>
                    <Input
                        name={'max value'}
                        error={counterState.error}
                        value={currentMax}
                        updateCurrentValue={updateCurrentValue}
                    />
                    <Input
                        name={'start value'}
                        error={counterState.error}
                        value={currentStart}
                        updateCurrentValue={updateCurrentValue}
                    />
                </div>
                <Button
                    name={'set'}
                    buttonHandler={saveSet}
                    disableSet={counterState.disableSet}
                />
            </div>
        </div>
    );
};

