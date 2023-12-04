import React, {useRef, useState} from 'react';

function UseRef(props) {
    const [number, setNumber] = useState(0)

    const ref = useRef(0)

    const handleClick = () => {
        ref.current = ref.current + 1
        console.log(ref.current)
    }

    const handleUpdate = () => {
        setNumber(ref.current)
    }

    const ref2 = useRef()
    console.log(ref2)

    console.log("Компонент перерендерился")
    return (
        <div>
            <button onClick={handleClick} >{number}</button>
            <button onClick={handleUpdate} >обновить</button>
            <button ref={ref2} >достаем из настоящего DOM дерева</button>
        </div>
    );
}

export default UseRef;