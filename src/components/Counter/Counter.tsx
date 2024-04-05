import React, {useEffect, useState} from 'react';
import {CounterMain} from "./counter_parts/CounterMain";
import {CounterSet} from "./counter_parts/CounterSet";
import s from "./Counter.module.css";

export const Counter = () => {
    const [count, setCount] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [startValue, setStartValue] = useState(0)
    const [reachedMaxLimit, setReachedMaxLimit] = useState(false)
    const [disableSet, setDisableSet] = useState(true)
    const [disableButtons, setDisableButtons] = useState(false)

    const [error, setError] = useState('')

    useEffect(() => {
        if (count >= maxValue) setReachedMaxLimit(true)

    }, [count])


    return (
        <div className={s.counterWrapper}>
            <CounterMain
                count={count}
                setCount={setCount}
                startValue={startValue}
                maxValue={maxValue}
                reachedMaxLimit={reachedMaxLimit}
                setReachedMaxLimit={setReachedMaxLimit}
                error={error}
                setError={setError}
                disableButtons={disableButtons}
                setDisableButtons={setDisableButtons}
            />
            <CounterSet
                setMaxValue={setMaxValue}
                setStartValue={setStartValue}
                setCount={setCount}
                maxValue={maxValue}
                startValue={startValue}
                disableSet={disableSet}
                setDisableSet={setDisableSet}
                setDisableButtons={setDisableButtons}
                setError={setError}
                setReachedMaxLimit={setReachedMaxLimit}
            />
        </div>
    );
};