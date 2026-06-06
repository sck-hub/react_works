import { useState } from "react"

export default function Like() {

    const [like, setLike] = useState(0);
    const handleOnLike = () => {
        setLike(like+1);
    }

    return (
        <div>
            <h2>Like</h2>
            <button onClick={handleOnLike}>Like</button>
            <span>{like}</span>
        </div>
    )
}