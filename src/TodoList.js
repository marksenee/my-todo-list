import React from 'react';

function Todo({ todo, onRemoveTodo }) {
    return (
        <div>
            <b>{todo.title}-{todo.content}</b>
            <button onClick={() => onRemoveTodo(todo.id)}>삭제</button>
        </div>
    )
}

function TodoList({ todos, onRemoveTodo }) {
  return (
    <div>
      <div>
          {todos.map((todo) => (
              <Todo todo={todo} key={todo.id} onRemoveTodo={onRemoveTodo}/>
          ))}
      </div>
    </div>
  );
}

export default TodoList;