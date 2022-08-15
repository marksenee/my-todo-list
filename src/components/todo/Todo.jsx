import React from 'react';
import './style.css'

function Todo({ todo, onRemoveTodo, checkTodo }) {
    console.log("todo", todo.isDone)
    return (
        <div className='index'>
            <span className='item-list'>{todo.title}-{todo.content}</span>
            <div>
              <button className='delete-btn' onClick={() => onRemoveTodo(todo.id)}>삭제</button>
              {todo.isDone ?
                <button className='complete-btn' onClick={() => checkTodo(todo.id)}>취소</button>
                 :  <button className='complete-btn' onClick={() => checkTodo(todo.id)}>완료</button>
              }
            </div>
        </div>
    )
}

export default Todo;