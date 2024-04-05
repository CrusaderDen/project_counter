import React, {ChangeEvent} from "react";
import s from '../Counter.module.css'
import {CounterStateType} from "../Counter";

type InputPropsType = {
    name: string
    value: number
    setValue: (value: number) => void
    fullInputClassName: string
    counterState: CounterStateType
    setCounterState: (v: CounterStateType) => void
}
export const Input = ({name, value, setValue, fullInputClassName, counterState, setCounterState}: InputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(Number(e.currentTarget.value))
        counterState.disableSet = false
        counterState.disableButtons = true
        setCounterState({...counterState})
    }
    return (
        <legend className={s.setLegend}>
            {name}
            <input type={'number'} className={fullInputClassName} value={value} onChange={onChangeHandler}/>
        </legend>
    );
};
