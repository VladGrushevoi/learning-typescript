import { useState } from "react"

export const useCheckbox = (initValue: boolean, name: string) => {
    const [isChecked, setChecked] = useState(initValue);

    return {
        checked: isChecked,
        name: name,
        onChange: (e : React.ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked) 
    }
}