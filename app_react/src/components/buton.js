import { useState } from 'react';

function MyButton() {
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1);
    };

    return(
        <button onClick={handleClick}>
            Clicado {count} vezes.
        </button>
    );
};

export default MyButton