import {DECREASE, INCREASE} from "./types";

export const increaseCounter = () => (
    {type: INCREASE}
);
export const decreaseCounter = () => (
    {type: DECREASE}
);
