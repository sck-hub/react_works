import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import FetchTodos from './components/FetchTodos'
import FetchTodoById from './components/FetchTodoById'
import Home from './layouts/Home'
import About from './layouts/About'
import Board from './layouts/Board'
import BoardById from './layouts/BoardById'
import AxiosTodos from './components/AxiosTodos'
import AxiosTodoByid from './components/AxiosTodoById'
import AxiosPost from './components/AxiosPost'

function App() {

  return (
    <>
      <section className="app">
        <BrowserRouter>
          <Routes>
            {/* axios() 사용 */}
            <Route path='/axios' element={<AxiosTodos />}/>
            <Route path='/axios/:id' element={<AxiosTodoByid />} />
            <Route path='/axios-post' element={<AxiosPost />} />            
            
            {/* fetch() 사용 */}
            {/* <Route path='/' element={<FetchTodos />}/>
            <Route path='/:id' element={<FetchTodoById />}/> */}
          </Routes>
          {/* <div className='header'>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/about">About</Link>&nbsp;
            <Link to="/board">Board</Link>
          </div>
          <Routes>
            <Route path ='/' element={<Home />} />
            <Route path ='/about' element={<About />} />
            <Route path ='/board' element={<Board />} />
            <Route path ='/board/:id' element={<BoardById />} />
          </Routes> */}
        </BrowserRouter>
 
      </section>

    </>
  )
}

export default App
