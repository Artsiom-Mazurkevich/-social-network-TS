import React, {FC} from "react";
import {WrappedFieldMetaProps, WrappedFieldProps} from 'redux-form';
import styles from './stylesFormControl.module.css';

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

export const FormControl: FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea: FC<WrappedFieldProps> = ({input, meta, ...restProps}) => {
    return (
        <div>
            <FormControl meta={meta}>
                <textarea {...input} {...restProps}/>
            </FormControl>
        </div>
    )
}

export const Input: FC<WrappedFieldProps> = ({input, meta, ...restProps}) => {
    return (
        <FormControl meta={meta}> <input {...input} {...restProps}/> </FormControl>
    )
}
