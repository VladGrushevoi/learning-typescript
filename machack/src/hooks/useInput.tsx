import { useState } from 'react'
 
export const useInput = (data : string) => {

    const [value, setValue] = useState(data)

    const setDefault = () => {
        setValue("")
    }

    return {
        value: value,
        onChange : (e : React.ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value),
        setDefault: setDefault
    }
}