import React from 'react';

function DoneTodo({ todo, onRemoveTodo, completeTodo }) {
    console.log("todo", todo.isDone)
    if (todo.isDone) {
        return (
            <div>
                <b>{todo.title}-{todo.content}</b>
                <button onClick={() => onRemoveTodo(todo.id)}>삭제</button>
                <button onClick={() => completeTodo(todo.id)}>취소</button>
            </div>
        )
    } 
}

function DoneTodoList({ todos, onRemoveTodo, completeTodo }) {
  return (
    <div>
      <div>
          {todos.map((todo) => (
              <DoneTodo todo={todo} key={todo.id} onRemoveTodo={onRemoveTodo} completeTodo={completeTodo}/>
          ))}
      </div>
    </div>
  );
}

export default DoneTodoList;