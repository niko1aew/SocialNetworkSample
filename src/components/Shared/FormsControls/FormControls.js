import React from 'react';
import classes from './FormControls.module.css';

const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    const errorClasses = hasError ? classes.error : '';
    return (
        <div className={classes.formControl + ' ' + errorClasses}>
            <div>
                {props.children}
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}