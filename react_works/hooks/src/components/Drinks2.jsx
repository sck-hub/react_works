import { useState } from "react";

const Drinks2 = () => {
    // 음료 리스트 상태 관리 - 초기화 : 빈 리스트
    const [drinks, setDrinks] = useState([]);
    // 입력 값 상태 관리 - 초기화 : 빈 문자열
    const [inputValue, setInputValue] = useState('');
    // 입력 값 변경 함수    inputValue가 출력, 들어가면 setInputValue 값이 들어감
    const inputValueChange = (e) => {
        setInputValue(e.target.value);

    }
    // 음료 추가 핸들러
    // 입력된 값(inputValue)을 newDrink에 저장
    const addDrink = () => {
        const newDrink = inputValue;
        setDrinks([...drinks, newDrink]);
        // 입력값 초기화
        setInputValue('');
    }
    return (
        <div>
            <h2>음료관리 2</h2>
            <input 
                type="text"
                placeholder="음료 이름을 입력하세요"
                value={inputValue}
                onChange={inputValueChange}
             />
            {/* <p>입력된 음료 : {inputValue}</p> */}
            <button onClick={addDrink}>음료 추가</button>
            {/* 음료 목록 출력 */}
            <ul>
                {drinks.map((drink, index) => (
                    <li key={index}>{drink}</li>
                ))}
            </ul>

        </div>

    );
}
export default Drinks2;