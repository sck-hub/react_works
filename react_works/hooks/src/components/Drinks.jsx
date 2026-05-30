import { useState } from "react";

const Drinks = () => {
    // 배열 : 음료 리스트 상태 관리     //   배열의 초기화
    const [drinks, setDrinks] = useState(['커피', '콜라']);

    // 기존에 있는것에 새로 추가하려니까 setDrinks를 불러와서 ... 을 붙이고 drinks를 가져온다 
    const addDrink = () => {
        setDrinks([...drinks, '딸기쥬스']);
    }

    // .join : ,를 사용하고 싶을 때 
    return (
        <div>
            <h2>음료 관리</h2>
            <h4>현재 음료 : {drinks.join(', ')}</h4>
            <button onClick={addDrink}>음료 추가</button>
        </div>

    );
}

export default Drinks;