import './App.css'
import BankReducer from './components/BankReducer'
import CounterReducer from './components/CounterReducer'
import CountRef from './components/CountRef'
import InputFocus from './components/InputFocus'
import User from './context/User'

function App() {

  return (
    <>
      <section id="app">
        <div>
          {/* <CountRef/> */}
          {/* <InputFocus /> */}
          {/* <CounterReducer /> */}
          {/* <BankReducer /> */}
          <User />
        </div>

      </section>

    </>
  )
}

export default App
