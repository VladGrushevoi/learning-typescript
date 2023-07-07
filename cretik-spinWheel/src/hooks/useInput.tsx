import React, { useState } from "react"

export const useInput = (initValue: string, name: string) => {
    const [value, setValue] = useState(initValue);

    const setDefault = () => {
        setValue("");
    }

    return {
        value: value,
        name: name,
        onChange: (e : React.ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value),
        setdefault: setDefault,
    }
}