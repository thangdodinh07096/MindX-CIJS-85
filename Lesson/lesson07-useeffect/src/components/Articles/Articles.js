import React, { useEffect, useState } from "react";

const Articles = () => {
    const [count, setCount] = useState(0);
    const [type, setType] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("1. Effect runs");
        document.title = `${count}`;
    }, [count]);

    useEffect(() => {
        console.log("2. useEffect call API runs");
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((response) => response.json())
            .then((data) => {
                console.log("data:", data);
                setData(data);
            });
    }, [type]);

    useEffect(() => {
        console.log("3. Effect with EMPTY deps runs");
    }, []);

    const onClickHandler = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={onClickHandler}>Click me</button>
            <div>
                <button onClick={() => setType("posts")}>posts</button>
                <button onClick={() => setType("comments")}>comments</button>
                <button onClick={() => setType("users")}>users</button>
            </div >
            <h3>List data</h3>
            <ul>
                {data.length === 0
                    ? "No data"
                    : data.map((item) => <li key={item.id}>{item.title}</li>)}
            </ul>
        </div >
    );
};

export default Articles;