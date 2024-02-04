/** @jsxImportSource solid-js */
import type { Component } from 'solid-js';
import Counter from "./components/counter/Counter";
import {Greet, MessageFromGo} from "../wailsjs/go/main/App";
import {createContext, createResource, createSignal, lazy, useContext} from "solid-js";
import {globalText} from "./globalSteate";
//import {GoFunc} from "~/components/gofunc/GoFunc";

//import logo from './logo.svg';
//import styles from './App.module.css';

const greetFromGo = async (msg: string) => {
    //return (await Greet("call by solid"))
    const res = await Greet(msg)
    return <>【{res}】</>
}
const messageFromGo = async () => {
    return await MessageFromGo()
}


const [message, setMessage] = createSignal("all");
const [data] = createResource<string, string>(message, greetFromGo);

const [sig, setSig] = createSignal("def");
const [res] = createResource<string, string>(sig, MessageFromGo);

const App: Component = () => {

    setMessage("ソリッドからゴー呼び出し")
    return (
        <>
            <div>Template</div>
            <Counter/>
            {data}
            {res}
            <div>{globalText()}</div>
        </>
    );
}
export default App;