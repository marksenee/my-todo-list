import React, { useState } from "react";

function App() {
  const [ value, setValue ] = useState("");
  const [ todos, setTodos ] = useState([
    {
      id: 1,
      title : "할 일1",
    },
    {
      id: 2,
      title : "할 일1",
    }
  ]); // 객체 배열 넣기 

  const onChangeHandler = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  }
  console.log(value);

  const onClickHandler = () => {
    setTodos([...todos, {id: todos.length+1, title: value}])
  }

  return (
    <div>
      <input type="text" onChange={onChangeHandler} value={value} />
      <button onClick={onClickHandler}>추가하기</button>
      <h3>Todo List</h3>
      <div>{todos.map((todo) => (
        <div>{todo.title}</div>
      ))}
      </div>
    </div>
  );
}

export default App;