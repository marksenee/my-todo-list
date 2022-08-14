import React from 'react';

function Todo({ todo, onRemoveTodo, completeTodo }) {
    console.log("todo", todo.isDone)
    if (!todo.isDone) {
        return (
            <div>
                <b>{todo.title}-{todo.content}</b>
                <button onClick={() => onRemoveTodo(todo.id)}>삭제</button>
                <button onClick={() => completeTodo(todo.id)}>완료</button>
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