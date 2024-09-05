import { signal } from "@preact/signals-react";

const ActualState = () => {
    const clicked = signal(false);

    const setClicked = (newVal) => {
        clicked.value = newVal;
    }

    const toggleClicked = () => {
        const flipped = !clicked.value
        clicked.value = flipped;
    }

    return () => ({
        toggleClicked,
        setClicked,
        clicked
    })
}

export const useActualState = ActualState();

export const useCustomState = () => {
    const { clicked, setClicked, toggleClicked } = useActualState();

    return ({
        toggleClicked,
        setClicked,
        clicked: clicked.value,
    })
}
