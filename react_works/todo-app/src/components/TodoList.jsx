export default function TodoList({todos, onToggleCompleted}) {
    return (
        <div>
            <ul>
            {todos.map( (todo) => (
                <li key={todo.id} className={todo.completed ? 'completed': ''}>
                <input type='checkbox'
                checked={todo.completed} 
                onChange={()=>onToggleCompleted(todo.id)}/>            
                {todo.text}
                </li>
            ) )}
            </ul>
        </div>
    )
}