import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AxiosTodoByid = () => {
    const {id} = useParams();
    // 상태관리
    const [data, setData] = useState(null);

    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((response) => {
            setData(response.data);
            console.log(response.data);
            
        })
        .catch((err) => console.log(err)
        )
    })
    return (
        <div>
            <h2>할 일 데이터</h2>
            { data && (
                <div>
                    <p>제목 : {data.title}</p>
                    <p>완료 여부 : {data.completed ? " ● 완료" : " ○ 미완료"}</p>
                </div>
            )
            }
        </div>
    )
}
export default AxiosTodoByid;