export default function Example03() {

    // 방식2 _ 이벤트 핸들러 : 참조 함수 - 내용이 많을 때 사용
    const handleClick = () => {
        alert("'버튼 2'가 클릭 됨")
    }

    // 인사하기
    const greet = (name) => {
        // alert(`안녕하세요, ${name}님!`);
        console.log(`안녕하세요, ${name}님!`);
        
    }

    return (
        <div>
            <h2>Button Event</h2>
            <div>
                {/* 방식1 _ 인라인 핸들러 : 이벤트 속성 안에 화살표 함수를 직접 생성하는 방식 */}
                <button onClick={ () => alert("'버튼 1'이 클릭 됨") }>버튼 1</button>
            </div>
            <div>
                {/* handleClick() <-- 오류, 소괄호 쓰지 않는다 */}
                <button onClick={handleClick}>버튼 2</button>
            </div>
            <div>
                <button onClick={() => greet('김도영')}>인사하기</button>
            </div>
        </div>
    );
}