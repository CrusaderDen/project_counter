import React, {useState} from 'react';
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

    const [counterState, setCounterState] = useState<CounterStateType>({
        count: 0,
        maxValue: 5,
        startValue: 0,
        error: '',
        reachedMaxLimit: false,
        disableSet: true,
        disableButtons: false
    })


    return (
        <div className={s.counterWrapper}>
            <CounterMain counterState={counterState} setCounterState={setCounterState}/>
            <CounterSet counterState={counterState} setCounterState={setCounterState}/>
        </div>

    );
};

