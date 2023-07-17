import { useState } from "react"

export const useInput = (init: string, name: string) => {
    const [value, setValue] = useState(init);

    return {
        name: name,
        value: value,
        onChange: (e : React.ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value) 
    }
}