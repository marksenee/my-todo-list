import React, { useState } from "react";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";

function App() {

  // 객체 형태로 두 input 태그의 name 속성값을 초기화 
  const [ inputs, setInputs ] = useState({
    title: '',
    content: '',
    isDone: false
  });

  // 구조분해 할당을 통해 값 추출 
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
    const { name, value } = event.target; //event.target에서 name과 value 추출 
    setInputs({
      ...inputs, // 기존 inputs 객체 복사 
      [name]: value // name 키를 가진 값을 value로 변경 
    });
  };

  //input 초기화
  const onResetInput = () => {
    setInputs('');
  }

  const onClickHandler = () => {
    setTodos([...todos, {id: todos.length+1, title: title, content: content}])
  }

  // todo 삭제
  // id를 인자로 받아서 해당 id 값을 가진 요소를 제외한 배열을 필터링해서 setTodos() 메소드로 변수를 다시 저장한다. 
  const onRemoveTodo = (id) => {
    console.log(id)
    setTodos(todos.filter(todo => todo.id !== id))
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
        <TodoList todos={todos} onRemoveTodo={onRemoveTodo}/>
    </div>
  );
}

export default App;