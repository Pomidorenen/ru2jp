import {useRef,useCallback} from "react";

export default function useDebounce(fn:(...args:any[])=>void, delay: number){
    const timer: { current: NodeJS.Timeout | null } = useRef(null);

    const debounceCallback:(...args:any[])=>void = useCallback((...args:any[]):void=>{
        if(timer.current){
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(()=>{
            fn(...args);
        },delay);
    },[fn, delay]);

    return debounceCallback;
}