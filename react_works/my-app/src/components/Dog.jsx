// props : 속성(프로퍼티의 약자)
const Dog = (props) => {
    // 구조 분해 할당 , 이 표현식을 많이 사용함
    const {breed, age} = props;

    return (
        <div>
            <h2>강아지</h2>
            <p>품종 : {breed}</p>
            <p>나이 : {age}</p>
        </div>

    );
}
// App.js에 내보내기
export default Dog;