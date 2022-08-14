import React, { useState } from "react";
import CreateTodo from "./CreateTodo";

function App() {
  const [ inputs, setInputs ] = useState({
    title: '',
    content: ''
  });

  const { title, content } = inputs;

  const [ todos, setTodos ] = useState([
    {
      id: 1,
      title : "할 일1",
      content: "content1"
    },
    {
      id: 2,
      title : "할 일2",
      content: "content2"
    }
  ]); // 객체 배열 넣기 

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onClickHandler = () => {
    setTodos([...todos, {id: todos.length+1, title: title, content: content}])
  }

  return (
    <div>
      <CreateTodo 
        title={title}
        content={content}
        onChange={onChangeHandler}
        onCreate={onClickHandler}
        />
        <h3>Todo List</h3>
        <div>{todos.map((todo) => (
        <div>{todo.title}-{todo.content}</div>
      ))}
      </div>
    </div>
  );
}

export default App;