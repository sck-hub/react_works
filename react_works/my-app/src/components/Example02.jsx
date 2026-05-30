// 화살표 함수 안쓰고 function으로 직접
export default function Example02() {
    // javascript
    const items = ['야구', '축구', '농구'];

    // (태그로)출력 , 출력에는 지장 없지만 콘솔에 에러가 발생해서 key값을 지정
    return (
        <div>
            <h2>리스트 렌더링</h2>
            {/* {items.map((item, index)=>(
                <p key={index}>{index+1}.{item}</p>
            ))} */}
            <ul>
                {items.map((item, index)=>(
                <li key={index}>{item}</li>
                ))}               
            </ul>

        </div>

    );
}