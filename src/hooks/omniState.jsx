import { enableReactTracking } from "@legendapp/state/config/enableReactTracking";
import { observable } from "@legendapp/state";

enableReactTracking({ auto: true });

const clicked$ = observable(false)

const setClicked = (newVal) => {
    clicked$.set(newVal)
}

const toggleClicked = () => {
    clicked$.toggle()
}

export const useActualState = () =>({
    toggleClicked,
    setClicked,
    clicked$,
});

export const useCustomState = () => {
    const { clicked$, setClicked, toggleClicked } = useActualState();

    return ({
        toggleClicked,
        setClicked,
        clicked: clicked$.get(),
    })
}
