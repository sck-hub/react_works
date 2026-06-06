import './App.css'
import Box from './children/Box'
import Profile from './children/Profile'
import Dog from './components/Dog'
import Dog2 from './components/Dog2'
import Example01 from './components/Example01'
import Example02 from './components/Example02'
import Example03 from './components/Example03'
import InputValue from './components/InputValue'
import Season from './components/Season'
import Footer from './practice/Footer'
import Header from './practice/Header'
import Main from './practice/Main'
import Test01 from './practice/Test01'
import Test02 from './practice/Test02'

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
        {/* props(속성) 연습 */}
        {/* <Dog
          breed = "말티즈"  // 문자
          age = {2}   // 숫자 : 중괄호있어야함
        /> */}
        {/* <Dog2 
          breed = "진돗개"  // 문자
          age = {5}   // 숫자 : 중괄호있어야함
        /> */}
        {/* <Box>
          <h3>박스 안의 내용</h3>
          <p>이것은 Box 컴포넌트 안에 있는 내용입니다</p>
        </Box> */}
        <Profile />

      </section>

      <section>
        {/* <h2>jsx 문법 배우기</h2>
        <MyButton /> */}
        {/* <Example03 /> */}
        {/* <InputValue /> */}
        {/* <Test02 /> */}
      </section>
    </>
  )
}


export default App


// 터미널 서버 관련
// 서버 끄기 ctrl + c y
// cd myApp : myApp으로 이동 
// npm run dev : 서버 실행