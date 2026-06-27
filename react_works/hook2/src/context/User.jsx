import { createContext } from "react";
import UserChild from "./UserChild";

// UserContext를 객체로 초기화하여 생성 (외부에 내보내기)
export const UserContext = createContext({});
const User = () => {
    
    const user = {
        name:"홍길동",
        age:33
    }
    return (
        <div>
            <h2>User Component</h2>
            <UserContext.Provider value={user}>
                <UserChild />

            </UserContext.Provider>
        </div>
    )

}
export default User;