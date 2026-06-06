import { useEffect, useState } from "react";

const UseEffectex = () => {
    // 상태관리, 문자열 초기화
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    // 리액트 컴포넌트가 렌더링 된 이후에 어떤 일을 수행해야 할 때 사용
    // 특정한 이벤트 발생하고 싶을 때
    // useEffect(콜백함수, 의존성배열) [] : 처음 렌더링 될 때만 한 번 실행
    // [name] : name이 변경될 때마다 실행
    useEffect(()=>{
        console.log("렌더링");
        
    }, [age])
    return(
        <div>
            <h2>사용자 정보</h2>
            이름 : 
            <input 
                type="text" 
                placeholder="이름 입력" 
                value={name}
                onChange={ (e) => setName(e.target.value) } 
            />
            나이 : 
            <input 
                type="number" 
                placeholder="나이 입력" 
                value={age}
                onChange={ (e) => setAge(e.target.value) } 
            />
            <p>이름 : {name}</p>
            <p>나이 : {age}</p>
        </div>
    )
}
export default UseEffectex;