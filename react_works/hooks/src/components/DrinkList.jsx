// 리액트 Props : 매개변수로 속성(prop)ㅇ이 전달됨
const DrinkList = ({drinks}) => {
    return (
        <div>
            <ul>
                {drinks.map((drink, index) => (
                    <li key={index}>{drink}</li>
                ))}
            </ul>
        </div>
    );
}
export default DrinkList;