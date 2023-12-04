import React, {useCallback, useState} from 'react';

function UseCallback(props) {
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)

    const incr = useCallback(()=>{
        setNumber1(number1 + 1);
    }, [number2])

    return (
        <div>
            <button onClick={incr} >Увеличить</button>
            <p>{number1}</p>
            <button onClick={()=>setNumber2(number2 + 1)} >{number2}</button>
        </div>
    );
}

export default UseCallback;