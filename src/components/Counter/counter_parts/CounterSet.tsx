import React, {useState} from 'react';
import s from '../Counter.module.css'
import {Input} from "./Input";
import {Button} from "./Button";

type CounterSetPropsType = {
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    setCount: (value: number) => void
    maxValue: number
    startValue: number
    disableSet: boolean
    setDisableSet: (v: boolean) => void
    setDisableButtons: (v: boolean) => void
    setError: (v: string) => void
    setReachedMaxLimit: (v: boolean) => void
}

export const CounterSet = ({
                               setMaxValue,
                               setStartValue,
                               setCount,
                               maxValue,
                               startValue,
                               disableSet,
                               setDisableSet,
                               setDisableButtons,
                               setError,
                               setReachedMaxLimit
                           }: CounterSetPropsType) => {

    const [currentMax, setCurrentMax] = useState(maxValue)
    const [currentStart, setCurrentStart] = useState(startValue)


    let fullInputClassName = s.setInput
    if (currentStart < 0 || currentStart >= currentMax) {
        setDisableSet(true)
        setError('Uncorrect value')
        fullInputClassName = fullInputClassName + ' ' + s.danger
    } else if (currentStart > 999999 || currentMax > 999999) {
        setDisableSet(true)
        setError('Too long number')
        fullInputClassName = fullInputClassName + ' ' + s.danger
    } else {
        setError('')
    }


    const doSaveSet = () => {
        setMaxValue(currentMax)
        setStartValue(currentStart)
        setCount(currentStart)
        setReachedMaxLimit(false)
        setDisableSet(true)
        setDisableButtons(false)
    }

    return (
        <div className={s.counterBody}>
            <div className={s.setBody}>
                <div className={s.setInputs}>
                    <Input name={'max value'} fullInputClassName={fullInputClassName} value={currentMax} setValue={setCurrentMax} setDisableSet={setDisableSet} setDisableButtons={setDisableButtons}/>
                    <Input name={'start value'} fullInputClassName={fullInputClassName} value={currentStart} setValue={setCurrentStart} setDisableSet={setDisableSet}
                           setDisableButtons={setDisableButtons}/>
                </div>
                <Button name={'set'} buttonHandler={doSaveSet} disableSet={disableSet}/>
            </div>
        </div>
    );
};

