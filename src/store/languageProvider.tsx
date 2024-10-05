import useTranslate,{IuseTranslate} from "../hooks/useTranslate";
import {createContext, ReactNode} from "react";

const initialStateLanguage = {
    en:{
        title:"Convert RU text to JP symbols",
        input:"Enter text",
        output:"output",
        copy:"copy to clipboard",
        button:"button",
        clear:"clear",
        history:"history"
    },
    ru:{
        title:"Замена RU символов на JP",
        input:"Введите текст",
        output:"результат",
        copy:"Скопировать",
        button:"кнопка",
        clear:"очистить",
        history:"история"
    }
}
export const LanguageContext = createContext({} as IuseTranslate);
interface Iprops{
    children:ReactNode;
}
export const ProviderLanguage = ({children}:Iprops)=>{
    const lang = useTranslate(initialStateLanguage,"en");
    return <LanguageContext.Provider value={lang}>{children}</LanguageContext.Provider>
}

