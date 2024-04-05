import React, {ChangeEvent} from "react";
import s from '../Counter.module.css'

type InputPropsType = {
    name: string
    value: number
    setValue: (value: number) => void
    setDisableSet: (v: boolean) => void
    fullInputClassName: string
    setDisableButtons: (v: boolean) => void
}
export const Input = ({name, value, setValue, setDisableSet, fullInputClassName, setDisableButtons}: InputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(Number(e.currentTarget.value))
        setDisableSet(false)
        setDisableButtons(true)
    }
    return (
        <legend className={s.setLegend}>
            {name}
            <input type={'number'} className={fullInputClassName} value={value} onChange={onChangeHandler}/>
        </legend>
    );
};
