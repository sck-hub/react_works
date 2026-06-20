import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ButtonSample from './components/Buttonsample'
import MainPage from './components/MainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="app">
        {/* <ButtonSample /> */}
        <MainPage />
 
      </section>

    </>
  )
}

export default App
1