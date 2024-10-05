import React, {MouseEvent, useRef} from 'react';
import rippleEffect from "../features/rippleEffect";

interface Iprops{
    children?:React.ReactNode,
    onClick?:(e?:MouseEvent<HTMLElement>)=>void
}
const Button = ({children="button",onClick=(e)=>{}}:Iprops) => {
    const buttonRef = useRef<HTMLButtonElement>({} as HTMLButtonElement );
    return (
        <button
            onClick={(e:MouseEvent<HTMLElement>)=>{
                rippleEffect(e,buttonRef.current,400);
                onClick(e);
            }}
            ref={buttonRef} className="btn">
            {children}
        </button>
    );
};

export default Button;