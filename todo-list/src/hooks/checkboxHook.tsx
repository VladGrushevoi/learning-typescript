import { useState } from "react"

export const useCheckbox = (checked : boolean) => {
    const [isChecked, setChecked] = useState(checked)

    return {
        checked: isChecked,
        onChange: (e : React.ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked),
    }
}