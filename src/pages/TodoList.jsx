import React from 'react';
import '../components/list/style.css'

function Todo({ todo, onRemoveTodo, completeTodo }) {
    console.log("todo", todo.isDone)
    if (!todo.isDone) {
        return (
            <div className='index'>
                <span className='item-list'>{todo.title}-{todo.content}</span>
                <div>
                  <button className='delete-btn' onClick={() => onRemoveTodo(todo.id)}>삭제</button>
                  <button className='complete-btn' onClick={() => completeTodo(todo.id)}>완료</button>
                </div>
            </div>
        )
    } 
}

function TodoList({ todos, onRemoveTodo, completeTodo }) {
  return (
    <div>
      <div>
          {todos.map((todo) => (
              <Todo todo={todo} key={todo.id} onRemoveTodo={onRemoveTodo} completeTodo={completeTodo}/>
          ))}
      </div>
    </div>
  );
}

export default TodoList;