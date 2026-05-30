// 함수 생성 : 매개변수 소괄호 -> 화살표

const Example01 = () => {
    // 변수 필요 - 값2개
    // javascript 영역
    let isLoggedIn = true;
    // let result;

    // if(isLoggedIn) {
    //     result = "로그인 상태입니다."
    // } else {
    //     result = "로그아웃 상태입니다."
    // }
    
    // tag(html)영역
    return (
        // tag
        <div>
            <h2>조건부 렌더링</h2>
            {/* <p>{result}</p> */}
            {/* 삼항연산자 사용 */}
            {/* {isLoggedIn ? 
                <p>로그인 상태입니다.</p> :
                <p>로그아웃 상태입니다.</p>            
            } */}
            {/* 연산자 사용(&&) : 로그인 상태만 나타내고 싶다, false=안나옴 */}
            {/* 게시판 글이 있을 때(isBoardList && ...)도 사용 */}
            {isLoggedIn && <p>로그인 상태입니다.</p>}
        </div>
    );

}

// 조립하고 보내준다, 함수명과 같아야함
export default Example01