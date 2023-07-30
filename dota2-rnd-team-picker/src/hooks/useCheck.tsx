import { useState } from "react"
import { Position } from "../types/positionEnum";

interface CheckInfo {
    name: string,
    checked: boolean,
    onChange: (e : React.ChangeEvent<HTMLInputElement>) => void,
    label: string,
    setDefault: () => void 
}

export const useCheck = (checked: boolean, name: Position) : CheckInfo => {
    const [value, setValue] = useState(checked);

    const setDefault = () => {
        setValue(false)
    }

    return {
        name: name,
        checked:value,
        onChange: (e : React.ChangeEvent<HTMLInputElement>) => {
            setValue(e.currentTarget.checked)
        },
        label: name,
        setDefault 
    }
}