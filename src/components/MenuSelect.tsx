import React, {ChangeEvent} from 'react';
import rippleEffect from "../features/rippleEffect";

interface Iprops{
    children:React.ReactNode;
    onChange:(e:ChangeEvent<HTMLSelectElement>) => void;
}
const MenuSelect = ({children,onChange}:Iprops) => {
    return (
        <div style={{position:"relative",overflow:"hidden"}} onClick={(e)=>{
            rippleEffect(e,e.currentTarget)
        }}>
        <select  className={"select"} onChange={onChange}>
            {children}
        </select>
        </div>
    );
};

export default MenuSelect;