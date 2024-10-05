import React, {ChangeEvent, useId} from 'react';

interface ITextFieldProps {
    onChange?:(e:ChangeEvent<HTMLInputElement>)=>void ;
    value?: string | number;
    title?: string | number;
    disabled?: boolean;
}
const TextField = ({onChange, value, title, disabled = false}:ITextFieldProps) => {
    return (
        <div className={"input"}>
            <input style={(disabled)?{pointerEvents:"none"}:{}} type="text" onChange={onChange} value={value} required spellCheck={"false"}/>
            <label>
                {title}
            </label>
        </div>
    );
};

export default TextField;