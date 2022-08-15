import React from 'react';
import '../list/style.css'
import '../layout/style.css'


function TodoItem({ todo, onRemoveTodo, checkTodo }) {
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

function TodoList({ todos, onRemoveTodo, checkTodo }) {
  return (
    <div>
      <div className="form"> 
        <h3 className="title-state">해야할 일 🔥</h3>
        <div>
            {todos.filter((todo) => !todo.isDone)
                .map((progressTodo) => (
                    <TodoItem 
                    todo={progressTodo} 
                    key={progressTodo.id} 
                    onRemoveTodo={onRemoveTodo} 
                    checkTodo={checkTodo}
                />
                ))
            }
        </div>
        <h3 className="title-state">완료한 일 🔥</h3>
        <div>
            {todos.filter((todo) => todo.isDone)
                .map((doneTodo) => (
                    <TodoItem 
                        todo={doneTodo} 
                        key={doneTodo.id} 
                        onRemoveTodo={onRemoveTodo} 
                        checkTodo={checkTodo}
                />
                ))
            }
        </div>
      </div>
    </div>
  );
}

export default TodoList;