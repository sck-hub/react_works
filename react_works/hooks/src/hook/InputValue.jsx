import { useState } from "react";

export default function InputValue() {

        const [text, setText] = useState('');
        const handleOnChange = (e) => {
            setText(e.target.value);
        }
    
    return (
        <div>
            <h2>입력 값 출력</h2>
            <input 
                type="text"
                value={text}                
                onChange={handleOnChange}
                placeholder="글자를 입력하세요"
            />
            <p>입력값 : {text}</p>
        </div>
    );
}