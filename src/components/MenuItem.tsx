import React from 'react';
interface Iprops{
    value: string;
    selected:boolean;
}
const MenuItem = ({value,selected}:Iprops) => {
    return (
        <option className={"option"} value={value} selected={selected}>
                {value}
        </option>
)
    ;
};

export default MenuItem;