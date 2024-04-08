import React, {ChangeEvent} from "react";
import s from '../Counter.module.css'
import {Button} from "./Button";


type InputPropsType = {
    name: string
    value: number
    error: string
    updateCurrentValue: any
    buttonIncrement: (name: string) => void
    buttonDecrement: (name: string) => void
}
export const Input = ({name, value, error, updateCurrentValue, buttonIncrement, buttonDecrement}: InputPropsType) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        updateCurrentValue(e, name)
    }


    const fullInputClassName = error ? s.setInput + ' ' + s.danger : s.setInput

    return (
        <legend className={s.setLegend}>
            {name}
            <Button xType={'additionalButtonLeft'} name={'-'} buttonHandler={() => buttonDecrement(name)}/>
            <input type={'number'} className={fullInputClassName} value={value} onChange={onChangeInputHandler}/>
            <Button xType={'additionalButtonRight'} name={'+'} buttonHandler={() => buttonIncrement(name)}/>
        </legend>
    );
};
