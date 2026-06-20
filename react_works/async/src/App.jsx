import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FetchTodos from './components/FetchTodos'
import FetchTodoById from './components/FetchTodoById'

function App() {

  return (
    <>
      <section className="app">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<FetchTodos />}/>
            <Route path='/:id' element={<FetchTodoById />}/>
          </Routes>
        </BrowserRouter>       
 
      </section>

    </>
  )
}

export default App
