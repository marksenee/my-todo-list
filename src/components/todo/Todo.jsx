import React from 'react';
import './style.css'

function Todo({ todo, onRemoveTodo, checkTodo }) {
    const { id, title, content, isDone } = todo;
    return (
        <div className='index'>
            <div className='item-list'> 
              <span className='title'>☑ {title} : {content}</span>
            </div>
            <div>
              <button className='delete-btn' onClick={() => onRemoveTodo(id)}>삭제</button>
              {isDone ?
                <button className='complete-btn' onClick={() => checkTodo(id)}>취소</button>
                 :  <button className='complete-btn' onClick={() => checkTodo(id)}>완료</button>
              }
            </div>
        </div>
    )
}

export default Todo;