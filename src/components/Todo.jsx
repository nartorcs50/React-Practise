import './Todo.css'

function Todo({title, onTodoLIst}) {
  return (
    <div className='todo'>
      <p>{ title }</p>
      <button onClick={onTodoLIst}>Delete</button>
    </div>
  );
}

export default Todo;
