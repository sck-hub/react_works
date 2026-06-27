import { useReducer, useState } from "react";

const initialState = {
    balance: 0
}
const reducer = (state, action) => {
    console.log("reducer가 작동합니다.", state, action);

    switch(action.type) {
        
        case "DEPOSIT":
            if(action.payload < 0 ) {
                alert("금액은 0원 이상이어야 합니다.")
                return state;
            }
            // action.payload - 입,출금액
            return { balance: state.balance + action.payload }

        case "WITHDRAW":

            if(action.payload < 0 ) {
                alert("금액은 0원 이상이어야 합니다.")
                return state;
            }

            // 잔액 부족한 경우 상태를 변경하지 않고 그대로 유지
            if(state.balance < action.payload) {
                alert("잔액이 부족합니다.")
                return state;
            } 

            return { balance: state.balance - action.payload }

        default:
            return state;
            
    }
    
}
const BankReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    // 입,출금액 상태 관리
    const [amount, setAmount] = useState(0);

    return (
        <div>
            <h2>현재 잔액 : {state.balance}원 </h2>
            <input 
                type="number"
                value={amount}
                step={1000}
                // 문자형을 숫자로 변환 - Number(), parseInt()
                onChange={(e) => setAmount(Number(e.target.value))}

            />
            <button onClick={() => dispatch({type: "DEPOSIT", payload: amount})}>예금</button>&nbsp;
            <button onClick={() => dispatch({type: "WITHDRAW", payload: amount})}>출금</button>
        </div>
    )
}
export default BankReducer;