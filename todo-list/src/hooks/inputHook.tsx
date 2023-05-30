import { useState } from "react"

export const useInput = (initData : string) => {
    const [value, setValue] = useState(initData);

    return {
        value: value,
        onChange : (event : React.ChangeEvent<HTMLInputElement>) : void => setValue(event.currentTarget.value), 
    }
}