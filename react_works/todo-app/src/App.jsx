import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList';

function App() {
  // 할 일 값 상태 관리
  const [todos, setTodos] = useState([]);
  // 입력 값 상태 관리
  const [inputValue, setInputValue] = useState("");
  // 입력 값 변경 핸들러 함수
  const handleInputChange = (e) => {
    // console.log("입력된 글자: ", e.target.value);
    // 페이지에 출력
    setInputValue(e.target.value);
    
  }
  console.log("리스트크기:" , todos.length);  // 0
  // 할 일 추가 함수
  const handleAddTodo = () => {
    // 변수 inputvalue를 객체로 만들기
    // 할 일 객체 생성
    if(inputValue.trim() === '') {        // trim()은 공백을 삭제함
      alert('할 일을 입력하세요');
      return ;
    }
    const newTodo = {
      id: todos.length + 1,
      text: inputValue,
      completed: false
    };
    setTodos([...todos, newTodo]);
    // 입력필드 초기화
    setInputValue('');

  }

  // 할 일 완료 체크
  const handleToggleCompleted = (id) => {
    // id가 체크되면 체크가 풀리고 그렇지 않으면 체크된다
    // 삼항연산자, todo:체크x, completed:체크o
    // 해당 id를 가진 할 일의 completed 상태를 토글하는 코드
    // todos 배열을 순회하면서 id가 일치하는 할 일의 completed 값을 반전시킴
    // id가 일치하지 않는 할 일은 그대로 유지
    setTodos(
      todos.map((todo) => (
        todo.id === id ? {...todo, completed : !todo.completed} : todo)
    ))
  }


  // 출력
  return (
    <>
      <section className='app'>
        <h2>할 일 관리</h2>

        <input 
          type="text"
          placeholder='할 일을 입력하세요'
          // 추가 버튼 작동 하기 위해 value값 필요
          value={inputValue}
          onChange={handleInputChange}
          
        />
        <button onClick={handleAddTodo}>추가</button>
        {/* <p>입력된 할 일 : {inputValue}</p> */}
        {/* 할 일 목록 */}
        <TodoList 
          todos={todos}
          onToggleCompleted={handleToggleCompleted}
        />       

        {/* <ul>
          {todos.map( (todo) => (
            <li key={todo.id} className={todo.completed ? 'completed': ''}>
              <input type='checkbox' checked={todo.completed} onChange={()=>handleToggleCompleted(todo.id)}/>{todo.text}
            </li>
          ) )}
        </ul> */}
      </section>
    </>
  )

}

export default App