import { useState } from "react"

export const useCheckbox = (initValue: boolean, name: string) => {
    console.log(initValue, "BEFORE") // true
    const [isChecked, setChecked] = useState<boolean>(initValue);
    console.log(isChecked, "AFTER"); // false
    const setValue = (checked: boolean) => {
        setChecked(checked);
    }

    return {
        hook: {
            checked: isChecked,
            name: name,
            onChange: (e : React.ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked) 
        },
        setValue, 
    }
}