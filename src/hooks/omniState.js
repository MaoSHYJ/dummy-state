import { signal } from "@preact/signals-react";

const ActualState = () => {
    const clicked = signal(false);

    const setClicked = (newVal) => {
        clicked.value = newVal;
    }

    return () => ({
        setClicked,
        clicked
    })
}

const useActualState = ActualState();

export const useCustomState = () => {
    const { clicked, setClicked } = useActualState();

    return ({
        setClicked,
        clicked: clicked.value,
    })
}
