import React from "react";
import s from '../Counter.module.css'

type ButtonPropsType = {
    name: string
    buttonHandler: () => void
    reachedMaxLimit?: boolean
    disableSet?: boolean
    disableButtons?: boolean
}

export const Button = ({name, buttonHandler, reachedMaxLimit, disableSet, disableButtons}: ButtonPropsType) => {

    // const fullButtonClassName = reachedMaxLimit ? s.uniButton + ' ' + s.disabled : s.uniButton
    let fullButtonClassName = s.uniButton
    if (name === '+' && reachedMaxLimit) {
        fullButtonClassName = fullButtonClassName + ' ' + s.disabled
    }
    if (name === 'set' && disableSet) {
        fullButtonClassName = fullButtonClassName + ' ' + s.disabled
    }
    if (disableButtons) {
        fullButtonClassName = fullButtonClassName + ' ' + s.disabled
    }


    return (
        <button className={fullButtonClassName} onClick={buttonHandler}>{name}</button>
    );
};