import { useState } from "react";

const Counter = () => {

    // 상태관리 : 변수랑 함수를 같이 사용
    // 초기화값 : 소괄호에 숫자 0, 문자는 따옴표
    // 숫자 세기 상태 관리 선언 -> const 선언
    // 변수 : count, 함수 : setCount()
    const [count, setCount] = useState(0);

    // 숫자 증가 핸들러 함수를 참조 형태로
    const increment = () => {
        setCount(count + 1);
    }

    // 감소 핸들러 함수
    const decrement = () => {
        setCount(count - 1);
    }

    // 초기화 함수
    const reset = () => {
        setCount(0);
    }

    return (
        <div>
            <h2>Counter</h2>
            <h3>현재 Count : {count}</h3>
            {/* <button onClick={()=>setCount(count+1)}>증가</button>
            <button onClick={()=>setCount(count-1)}>감소</button>
            <button onClick={()=>setCount(0)}>초기화</button> */}
            <button onClick={increment}>증가</button>
            <button onClick={decrement}>감소</button>
            <button onClick={reset}>초기화</button>
        </div>

    );
}

export default Counter;