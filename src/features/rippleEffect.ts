import {MouseEvent} from "react";

export default function rippleEffect(e:MouseEvent<HTMLElement>,element:HTMLElement,delay:number = 500):void {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    element.appendChild(ripple);

    const x = e.clientX - e.currentTarget.offsetLeft;
    const y = e.clientY - e.currentTarget.offsetTop;

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    setTimeout(() => {
        ripple.remove();
    }, delay);
}