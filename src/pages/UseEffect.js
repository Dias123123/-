import React, {useEffect, useState} from 'react';

function UseEffect(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/1").then(response => response.json())
            .then(data => setData(data))
    })

    return (
        <div>
            <h1>Рендер</h1>
            <div>
                {/*{data.map(item => (*/}
                {/*    <span>{item.title}</span>*/}
                {/*))}*/}
                {data.title}
            </div>
        </div>
    );

}

export default UseEffect;