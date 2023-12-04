import React, {useMemo, useState} from 'react';

function UseMemo(props) {
    const [number, setNumber] = useState(0)
    const [number2, setNumber2] = useState(0)

    const memoedResult = useMemo(()=>{
        console.log("Функция заработала")
        return number * 2
    }, [number])

    return (
        <div>
            <p>{memoedResult}</p>
            <button onClick={()=>{setNumber(number + 1)}}>{number}</button>
            <button onClick={()=>{setNumber2(number2 + 1)}}>{number2}</button>
        </div>
    );
}

export default UseMemo;