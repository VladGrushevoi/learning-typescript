interface CheckboxProps {
    label : string,
    labelClasses : string | null,
    checkboxId : string,
    checkboxType : React.HTMLInputTypeAttribute,
    checkboxHook : {
        checked: boolean, 
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    },
    checkboxClasses: string | undefined
}

export const CheckBox = (props : CheckboxProps) => {
    return (
        <>
            <label 
                className={props.labelClasses ? props.labelClasses : ""} 
                htmlFor="edotIsDone"

                >{props.label}</label>
                <input
                    id={props.checkboxId}
                    type={props.checkboxType}
                    {...props.checkboxHook}
                    className={props.checkboxClasses}
                />
        </>
    )
}