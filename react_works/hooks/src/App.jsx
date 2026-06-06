import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './components/Counter'
import Car from './components/Car'
import Drinks from './components/Drinks'
import Drinks2 from './components/Drinks2'
import UserList from './components/userList'
import UseEffectex from './hook/UseEffectex'
import Like from './hook/Like'
import InputValue from './hook/InputValue'
import SignIn from './hook/SignIn'

function App() {

  return (
    <>
      <section className='app'>
        <h2>상태 관리 실습</h2>
        {/* <Counter /> */}
        {/* <Car /> */}
        {/* <Drinks /> */}
        {/* <Drinks2 /> */}
        {/* <UserList /> */}
        {/* <UseEffectex /> */}
        {/* <Like /> */}
        {/* <InputValue /> */}
        <SignIn />
      </section>
    </>
  )
}

export default App
