import {createSignal} from "solid-js";
import {createStore} from "solid-js/store";

export const [globalCount, setGlobalCount] = createSignal<number>(0)
export const [globalText, setGlobalText] = createSignal("")

