import {useEffect, useState} from "react";

export interface IuseTranslate {
    language:string,
    setLanguage:React.Dispatch<React.SetStateAction<string>>,
    viewLanguage:{[index: string]:any},
    listLanguage:string[]
}
export default function useTranslate(languageDict:{[index: string]:any},initLanguage:string="en"):IuseTranslate{
    const [language, setLanguage] = useState<string>(initLanguage);
    const [viewLanguage, setViewLanguage] = useState<{[index: string]:any}>(languageDict[language]);
    const listLanguage = Object.keys(languageDict);
    useEffect(()=>{
        setViewLanguage(languageDict[language]);
    },[language]);
    return{language,setLanguage,viewLanguage,listLanguage};
}