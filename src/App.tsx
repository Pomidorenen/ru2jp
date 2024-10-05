import React, {useContext, useEffect, useState} from 'react';
import './App.scss';
import TextField from "./components/TextField";
import useInput from "./hooks/useInput";
import Ru2jp from "./features/convertRu2Jp";
import Button from "./components/Button";
import useDebounce from "./hooks/useDebounce";
import {LanguageContext} from "./store/languageProvider";
import {contextTheme} from "./store/themeProvider";
import MenuSelect from "./components/MenuSelect";
import MenuItem from "./components/MenuItem";
import ToggleSwitch from "./components/toggleSwitch";


function App() {
    const textInput = useInput("");
    const {listLanguage,setLanguage,viewLanguage} = useContext(LanguageContext);
    const {state,dispatch} = useContext(contextTheme);
    const [text, setText] = useState<string>("");
    const [history, setHistory] =useState<Array<string[]>>([]);
    const addHistory = (origin:string)=>{
        if(origin.length===0)return;
        setHistory(prevHistory => [...prevHistory, [origin,Ru2jp(origin)]]);
    }
    const copyText = ()=>{
        navigator.clipboard.writeText(text);
    }
    const debounceAddHistory = useDebounce(addHistory,500);
    useEffect(()=>{
        setText(Ru2jp(textInput.value));
        debounceAddHistory(textInput.value);
    }, [textInput.value]);

    return (
        <div className="App">
            <header className={"header"}>
                <div>
                    <MenuSelect onChange={(e) => setLanguage(e.target.value)}>
                        {listLanguage.map((el, i) => {
                            let selected = false;
                            if (i === 0) {
                                selected = true;
                            }
                            return <MenuItem key={i} value={el} selected={selected}/>
                        })}
                    </MenuSelect>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        {state.dark ? "dark" : "light"}
                        <ToggleSwitch value={String(state.dark)} onChange={(e) => dispatch({type: "toggleColor"})}/>
                    </div>
                </div>
                <a href={"https://github.com/Pomidorenen"}>github</a>
            </header>
            <div className={"container"}>
                <h1 style={{textAlign: "center", padding: "48px"}}>{viewLanguage.title}</h1>
                <section className={"content"}>
                <TextField title={viewLanguage.input} {...textInput}/>
                    <div style={{display: "flex", justifyContent: "space-between", gap: "12px"}}>
                        <TextField value={text} title={viewLanguage.output} disabled={true}/>
                        <Button onClick={copyText}>
                            {viewLanguage.copy}
                        </Button>
                    </div>
                </section>
                <section className={"history"}>
                    <h1 className={"history-title"}>
                        {viewLanguage.history}
                    </h1>
                    <div className={"history-body"}>
                    {history.map(([origin,value],i)=>{
                        return <div key={i}>{origin}-{value}</div>
                    })}
                    </div>
                    <div className={"history-footer"}>
                        <Button onClick={()=>{
                            setHistory([]);
                        }}>
                            {viewLanguage.clear}
                        </Button>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;
