import {ChangeEvent, useCallback, useState} from "react";


export default function useInput(init:string = ""){
    const [value, setValue] = useState<string>(init);
    const onChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value),
        []
    )
    return{
        onChange,
        value
    }
}