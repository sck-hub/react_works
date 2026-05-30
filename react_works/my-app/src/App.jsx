import './App.css'
import Example01 from './components/Example01'
import Example02 from './components/Example02'
import Example03 from './components/Example03'
import Season from './components/Season'
import Footer from './practice/Footer'
import Header from './practice/Header'
import Main from './practice/Main'
import Test01 from './practice/Test01'

function MyButton() {
// return에 태그가 여러개 있을 때 괄호가 있어야 함
// <>로 씌워야함
  return (
    <>
      <button>목록보기</button>
    </>
  )
}

// 실제 코딩을 하는 곳
function App() {    // 함수형태
  // let season = "봄"

  // 변수를 출력할 때 {} 사용 : 변수의 값을 나타내는 "중괄호" : js문법
  // source도 중괄호 사용, 숫자도 중괄호
  // 화면에 나타나는 부분 : return
  // return에 부모<>가 항상 있어야 하며 1개다. <>는 상위태그
  return (      // 화면이 보여지는 곳
    <>
      <section id="center">

        {/* <h2>리액트 시작하기</h2> */}
        {/* <Season /> */}
        {/* <Example01 /> */}
        {/* <Example02 /> */}
        {/* <Header /> */}
        {/* <Test01 /> */}
        {/* <Header />
        <Main />
        <Footer /> */}
        {/* <h3>현재 계절: {season}</h3> */}
        {/* <img src={heroImg} alt='메인 이미지' width={300} /> */}
        

      </section>

      <section>
        {/* <h2>jsx 문법 배우기</h2>
        <MyButton /> */}
        <Example03 />
      </section>
    </>
  )
}


export default App


// 터미널 서버 관련
// 서버 끄기 ctrl + c y
// cd myApp : myApp으로 이동 
// npm run dev : 서버 실행