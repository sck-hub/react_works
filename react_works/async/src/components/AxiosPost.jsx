import axios from "axios";
import { useState } from "react";

const AxiosPost = () => {
    const [title, setTitle] = useState("");

    // 입력값 변경시 상태 업데이트
    const handleInputChange = (e) => {
        setTitle(e.target.value);
    }
    // 폼 전송시 핸들러(함수)
    const handleSubmit = (e) => {
        e.preventDefault();     // 새로고침 방지, 기본 동작을 막아줌

        // 유효성 검사, title이 입력되지 않으면
        if(!title) {
            alert("할 일 입력하세요")
            return;
        }

        // 할 일 생성
        axios.post("https://jsonplaceholder.typicode.com/todos",
            { 
                title: title,       // 제목
                completed: false   // 완료 상태
            })
            .then((response) => {
                if(e.target.value === "") {
                    alert("할 일 입력하세요");
                    return;
                }
                console.log("추가된 데이터: ", response.data);
                alert("추가 완료");
                setTitle(""); // 입력필드 초기화
                
            })
            .catch((err) => console.log(err)
            );

    }

    return (
        <div>
            <h2>할 일 추가</h2>
            <form onSubmit="handleSubmit">
                <input 
                    type="text"
                    placeholder="할 일 입력"         
                    value={title}
                    onChange={handleInputChange}   
                />
                <button onClick={handleSubmit}>추가</button>
            </form>
            {/* <p>입력된 할 일 : {title}</p> */}
        </div>
    )
}
export default AxiosPost;