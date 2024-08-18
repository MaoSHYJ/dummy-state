import { useCustomState } from '../hooks/omniState'

const Side = () => {
    const { setClicked } = useCustomState();

    const handleClick = () => {
        setClicked(true);
    }

    return (
        <>
            <button onClick={handleClick}>Click the button</button>
        </>
    )
}

export default Side
