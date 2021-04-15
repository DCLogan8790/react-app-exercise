
// 5a
import { useState } from 'react';


// 1a/3b/3d
const Exercise = ({ good = 'Great', bad = 'Not Great' }) => {
    // 5c
        const [num, setNum] = useState(1);
        // 5d
        const addNum = () => setNum(num + 1);

        // 2a
        return (
            <div>
                {/* 3c */}
                <h2>{good}</h2>
                <h2>{bad}</h2>
                {/* 4a/4b */}
                <button onClick={() => alert('Congrats! You have clicked the button.')}>Click Here</button>
                {/* 5b */}
                <button onClick={addNum}>STATE</button>
                <h1>{num}</h1>
            </div>
        );
        }
// 1b
export default Exercise;
