import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AxiosTodos = () => {
    // 배열로 초기화
    const [data, setData] = useState([]);
    // 한 번만 진행
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
            setData(response.data); // 가져온 data를 상태에 저장
            console.log(response.data);          

        })
        .catch((err)=>
            console.log(err)   // 오류 처리            
        );
    }, []); // 마운트 될 때 한번만 실행
    return (
        <div>
            <h2>할 일 목록</h2>
            <ul>
                {data.map((todo) => (<li key={todo.id}>
                    <Link to={`/axios/${todo.id}`}>{todo.title}</Link></li>))}
            </ul>
        </div>
    )
}
export default AxiosTodos;