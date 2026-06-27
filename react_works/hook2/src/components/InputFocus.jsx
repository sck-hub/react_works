import { useEffect, useRef } from "react";

const InputFocus = () => {
    const inputRef = useRef(null);  // 참조 객체 생성
    console.log(inputRef);  // {current: null}

    // useEffect()로 검증
    useEffect( () => {
        console.log(inputRef);  // {current: input}
        inputRef.current.focus();   // 커서가 input으로 이동
        
    }, [] ) // 마운트 (렌더링) - 1번 새로고침 될 때 1번 실행

    // handleInputFocus
    const handleClick = () => {
        if(!inputRef.current.value) {
            alert('입력하세요');
            inputRef.current.focus();   // 커서 유지, 커서가 되돌아옴
            return;
        }
        alert(`환영합니다. ${inputRef.current.value}님`)
        inputRef.current.focus();   // 커서 유지, 커서가 되돌아옴
        inputRef.current.value = "";    // 입력값 초기화
    }
    
    return (
        <div>
            <input 
                type="text"
                placeholder="이름을 입력하세요"
                ref={inputRef}
            />
            <button onClick={handleClick}>전송</button>
        </div>
    )
}
export default InputFocus;