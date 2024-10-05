import { createContext, ReactNode, useReducer, Reducer} from "react";

interface IThemeAction {
    payload?:any,
    type:string
}
interface ITheme{
    dark:boolean,
    darkColor:{[key:string]:any},
    lightColor:{[key:string]:any},
}
function changeColorsTheme(property:Object):void{
    Object.entries(property).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
    })
}
const reducerTheme = (state:ITheme,action:Partial<IThemeAction>)=>{
    const {type} = action;
    switch(type){
        case "toggleColor":{
            changeColorsTheme(!state.dark?state.darkColor:state.lightColor);
            return {...state,dark:!state.dark};
        }
        default:throw Error('Unknown action.');
    }
}

const initialStateTheme:ITheme = {
    dark:true,
    darkColor:{
        "--main-color":"rgb(14, 14, 23)",
        "--second-color":"rgb(29, 28, 48)",
        "--sub-second-color":"rgb(40,30,50)",
        "--third-color": "rgb(223, 223, 223)"
    },
    lightColor:{
        "--main-color":"rgb(248,248,248)",
        "--second-color":"rgb(145,190,207)",
        "--sub-second-color":"rgb(140,180,200)",
        "--third-color": "rgb(8,4,19)"
    }
}
interface IthemContex{
    state:ITheme,
    dispatch:Function,
}
const contextTheme = createContext({} as IthemContex);

interface Iprops{
    children:ReactNode,
}
const ProviderTheme = ({children}:Iprops) => {
    const [state,dispatch] = useReducer<Reducer<ITheme,IThemeAction>>(reducerTheme,initialStateTheme);
    return <contextTheme.Provider value={{ state,dispatch }}>{children}</contextTheme.Provider>;
}

export { contextTheme, ProviderTheme };