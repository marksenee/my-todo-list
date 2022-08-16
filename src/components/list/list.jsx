import React from 'react';

import './style.css'

import Todo from '../todo/Todo';

function List({ todos, onRemoveTodo, checkTodo }) {
  return (
    <div>
      <div className="form"> 
        <h3 className="title-state">해야할 일 🔥</h3>
        <div>
            {todos.filter((todo) => !todo.isDone)
                .map((progressTodo) => (
                    <Todo 
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
                    <Todo 
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

export default List;