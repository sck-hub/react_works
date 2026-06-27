import { useEffect, useState } from "react"
import {Link} from "react-router-dom"

const FetchTodos = () => {
    // data 상태를 배열로 관리
    const [data, setData] = useState([]);
    // useEffect를 안 쓰면 무한 실행 됨
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())    // json을 자바스크립트 객체로 변환
        .then((result) => {
            setData(result);    // 변환 된 데이터를 상태에 저장
            console.log(result);
            
        })
        .catch((error) => console.log(error));  // 에러 처리
    }, []); // 마운트 될 때 한 번만 실행
    return (
        <div>
            <h2>할 일 데이터 목록</h2>
            <ul>
                {data.map((todo) => (
                    <li key={todo.id}>
                        <Link to={`/${todo.id}`}>{todo.title}</Link>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default FetchTodos