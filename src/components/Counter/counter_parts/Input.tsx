import React, {ChangeEvent} from "react";
import s from '../Counter.module.css'


type InputPropsType = {
    name: string
    value: number
    error: string
    updateCurrentValue: any
}
export const Input = ({name, value, error, updateCurrentValue}: InputPropsType) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        updateCurrentValue(e, name)
    }

    const fullInputClassName = error ? s.setInput + ' ' + s.danger : s.setInput

    return (
        <legend className={s.setLegend}>
            {name}
            <input type={'number'} className={fullInputClassName} value={value} onChange={onChangeInputHandler}/>
        </legend>
    );
};
