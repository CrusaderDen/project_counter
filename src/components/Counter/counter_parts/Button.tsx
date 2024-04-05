import React from "react";
import btn_styles from './btn_Styles.module.css'

type ButtonPropsType = {
    name: string
    buttonHandler: () => void
    reachedMaxLimit?: boolean
    disableSet?: boolean
    disableButtons?: boolean
}

export const Button = ({name, buttonHandler, reachedMaxLimit, disableSet, disableButtons}: ButtonPropsType) => {

    let fullButtonClassName = btn_styles.uniButton
    if (name === '+' && reachedMaxLimit) {
        fullButtonClassName = fullButtonClassName + ' ' + btn_styles.disabled
    }
    if (name === 'set' && disableSet) {
        fullButtonClassName = fullButtonClassName + ' ' + btn_styles.disabled
    }
    if (disableButtons) {
        fullButtonClassName = fullButtonClassName + ' ' + btn_styles.disabled
    }


    return (
        <button className={fullButtonClassName} onClick={buttonHandler}>{name}</button>
    );
};