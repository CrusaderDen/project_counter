import React, {useEffect, useState} from 'react';
import {CounterMain} from "./counter_parts/CounterMain";
import {CounterSet} from "./counter_parts/CounterSet";
import s from "./Counter.module.css";

export type CounterStateType = {
    count: number
    maxValue: number
    startValue: number
    error: string
    reachedMaxLimit: boolean
    disableSet: boolean
    disableButtons: boolean
}


export const Counter = () => {

    const getInitialState = () => {
        const storage = localStorage.getItem('counter')
        if (storage) {
            return JSON.parse(storage)
        }
        return {
            count: 0,
            maxValue: 5,
            startValue: 0,
            error: '',
            reachedMaxLimit: false,
            disableSet: true,
            disableButtons: false
        }
    }

    const [counterState, setCounterState] = useState<CounterStateType>(getInitialState)

    useEffect(() => {
        localStorage.setItem('counter', JSON.stringify(counterState))
    }, [counterState])

    return (
        <div className={s.counterWrapper}>
            <CounterMain counterState={counterState} setCounterState={setCounterState}/>
            <CounterSet counterState={counterState} setCounterState={setCounterState}/>
        </div>

    );
};

