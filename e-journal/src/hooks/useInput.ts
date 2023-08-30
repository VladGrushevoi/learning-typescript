import { useState } from "react"

export interface InputHook {
    name: string,
    value: string,
    onChange: (e : React.ChangeEvent<HTMLInputElement>) => void,
}

export const useInput = (init: string, name: string) : InputHook => {
    const [value, setValue] = useState(init);

    return {
        name: name,
        value: value,
        onChange: (e : React.ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value) 
    }
}