const InputValue = () => {

    // 입력값 변경 핸들러(함수) : 매개변수는 event
    const handleInputChange = (event) => {
        // console.log(event);
        console.log(event.target.value);
        
    }

    return (
        <div>
            <h2>입력값 변경 핸들러</h2>
            <input 
                type="text"
                placeholder="글자를 입력하세요"
                onChange={handleInputChange}
            />

        </div>
    );
}
// 내보내기
export default InputValue;