import { useCustomState } from '../hooks/omniState'

const Side = () => {
    const { toggleClicked } = useCustomState()

    const handleClick = () => {
        toggleClicked();
    }

    return (
        <>
            <button onClick={handleClick}>Click the button</button>
        </>
    )
}

export default Side
