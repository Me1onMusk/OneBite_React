import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div> 
            <h2> { count } <button onClick={ () => { setCount((count) => count+1) } }>+</button> </h2> 
        </div>
    );
};

export default Counter;