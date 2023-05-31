import React from "react"

interface InputProps {
    label : string,
    labelClasses : string | null,
    inputId : string,
    inputType : React.HTMLInputTypeAttribute,
    inputPlaceholder : string | null,
    inputHook : {
        value: string | number, 
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    },
    inputClasses: string | undefined
}

export const Input = (props : InputProps) => {
    return (
        <>
            <label 
                className={props.labelClasses ? props.labelClasses : ""} 
                htmlFor={props.inputId}

            >{props.label}</label>
                <input
                    id={props.inputId}
                    type={props.inputType}
                    placeholder={props.inputPlaceholder ? props.inputPlaceholder : ""}
                    {...props.inputHook}
                    className={props.inputClasses ? props.inputClasses : ""}
                />
        </>
    )
}