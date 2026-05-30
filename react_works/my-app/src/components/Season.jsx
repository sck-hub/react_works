import heroImg from '../assets/hero.png'
const Season = () => {                  // function App() {}
    let season = "봄"

    //렌더링, 출력
    return (
        <div>
            <h3>현재 계절: {season}</h3>
            <img src={heroImg} alt='메인 이미지' width={300} />
        </div>
    )
}

// 내보내기
export default Season;