import React from "react";
import btn_styles from './btn_Styles.module.css'

type ButtonPropsType = {
    name: string
    buttonHandler: () => void
    reachedMaxLimit?: boolean
    disableSet?: boolean
    disableButtons?: boolean
    xType?: string
}

export const Button = ({name, buttonHandler, reachedMaxLimit, disableSet, disableButtons, xType}: ButtonPropsType) => {

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

    if (xType === 'additionalButtonLeft') {
        fullButtonClassName = btn_styles.additionalButton + ' ' + btn_styles.additionalButtonLeft
    }
    if (xType === 'additionalButtonRight') {
        fullButtonClassName = btn_styles.additionalButton + ' ' + btn_styles.additionalButtonRight
    }


    return (
        <button className={fullButtonClassName} onClick={buttonHandler}>{name}</button>
    );
};