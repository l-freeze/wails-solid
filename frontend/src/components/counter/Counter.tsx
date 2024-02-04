import {createEffect, createSignal, createResource} from "solid-js";
import "./Counter.css";
import {setGlobalText} from "../../globalSteate";

export default function Counter() {
    const [count, setCount] = createSignal(0);
    const [valueC] = createResource<number, number>(count, ()=>9)
    createEffect(()=> {
        setGlobalText(`今のCountは${count()}`)
    })
    return (
        <>
            <button class="increment" onClick={() => setCount(count() + 1)}>
                Clicks: {count()}
            </button>
        </>
    );
}