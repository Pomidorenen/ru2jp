import React, {ChangeEvent} from 'react';

interface IToggleSwitch {
    value: string;
    onChange: (e:ChangeEvent<HTMLInputElement>)=>void;
}
const ToggleSwitch = ({value,onChange}:IToggleSwitch) => {
    return (
        <div>
            <label className="toggle-switch">
                <input value={value} onChange={onChange} type="checkbox"/>
                <span className="state">
                    <span className="toggle-container">
                        <span className="position"></span>
                    </span>
                </span>
            </label>
        </div>
    );
};

export default ToggleSwitch;