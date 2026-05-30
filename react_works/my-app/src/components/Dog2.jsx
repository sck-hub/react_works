// props : 속성(프로퍼티의 약자)
const Dog2 = ({breed, age}) => {

    return (
        <div>
            <h2>강아지2</h2>
            <p>품종 : {breed}</p>
            <p>나이 : {age}</p>
        </div>

    );
}
// App.js에 내보내기
export default Dog2;