const UserList = () => {

    // 객체 리스트(배열)
    const users = [
    { id: 1, name: '홍길동' },
    { id: 2, name: '이순신' },
    ];

    // 리스트 (배열)
    const carts = ['두부', '바나나', '배']

    return (
        <div>
            <h2>UserList</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.id}.{user.name}</li>
                ))}
            </ul>

            <h2>장바구니</h2>
            <ul>
                {/* 배열은 0번부터 시작된 */}
                {carts.map((cart, index) => (
                    <li key={index}>{index+1}.{cart}</li>
                ))}
            </ul>

        </div>


    );
}
export default UserList;