import { useCustomState } from '../hooks/omniState'

const Main = () => {
    const { clicked } = useCustomState();
    return (
        <>
            Button clicked: {clicked ? 'yep' : 'noup'}
        </>
    )
}

export default Main
