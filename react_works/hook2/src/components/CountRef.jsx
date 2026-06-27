import { useState, useRef } from "react";

const CountRef = () => {
    // 상태 관리
    const [count, setCount] = useState(0);
    const countRef = useRef(0); // 참조 객체 생성
    let countVar = 0;   // 일반 변수



    console.log("렌더링...");
    console.log(countRef);  // {current:0}
    
    
    // 상태 증가
    const increaseHandleClick = () => {
        setCount(count+1);
    }

    // 참조 증가 - 렌더링이 되더라도 값을 저장함
    const increaseCountRef = () => {
        countRef.current += 1   // countRef.current = countRef.current + 1
        console.log(countRef.current);
        
    }

    // 일반 변수 증가 - 렌더링이 될 때마다 초기화 (저장 안 됨), 잘 쓰이진 않음
    const increaseCountVar = () => {
        countVar += 1;  // countVar = countVar + 1
        console.log("var:", countVar);
        
    }


    // useRef : 값은 저장하는데 렌더링과 관계없이 값을 저장할 때
    return (
        <div>
            <h2>State: {count}</h2>
            <h3>Ref: {countRef.current}</h3>
            <h3>Var: {countVar}</h3>
            <button onClick={increaseHandleClick}>증가</button>&nbsp;
            <button onClick={increaseCountRef}>Ref 증가</button>&nbsp;
            <button onClick={increaseCountVar}>Var 증가</button>
        </div>
    )
}
export default CountRef;