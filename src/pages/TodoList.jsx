import React, { useState } from "react";

import Header from "../components/header/Header";
import List from "../components/list/List";

import LayoutStyle from "../components/layout/css/LayoutStyle";

function TodoList() {

  // 객체 형태로 두 input 태그의 name 속성값을 초기화 
  const [ inputs, setInputs ] = useState({
    title: '',
    content: '',
    isDone: false
  });

  // 구조분해 할당을 통해 값 추출 
  const { id, title, content, isDone } = inputs; 

  const [ todos, setTodos ] = useState([
    {
        id: 1,
        title : "리액트",
        content: "리액트 hooks 공부하기",
        isDone: false
      },
      {
        id: 2,
        title : "TIL",
        content: "매일 TIL 작성하기",
        isDone: true
      },
      {
        id: 3,
        title : "WIL",
        content: "일요일 WIL 제출하기",
        isDone: false
      },
      {
        id: 4,
        title : "JavaScript",
        content: "JavaScript 공부하기",
        isDone: false
      }
])

  const onChangeHandler = (event) => {
    console.log(event.target.value)
    const { name, value } = event.target; //event.target에서 name과 value 추출 
    console.log("name:" , name , " [name]:" , [name], " value:", value); //name: title  [name]: ['title']  value: "내가 입력하고 있는 값"
    
    setInputs({
      ...inputs, // 기존 inputs 객체 복사 
      [name]: value // name 키를 가진 값을 value로 변경 
    });
  };

  // 등록 
  const onClickHandler = () => {
    // todo 새로운 값 등록 
    setTodos([...todos, {id: todos.length+1, title: title, content: content, isDone: isDone}])
    // input 초기화
    setInputs({
      title: '',
      content: '',
    })
  }

  // todo 삭제
  // id를 인자로 받아서 해당 id 값을 가진 요소를 제외한 배열을 필터링해서 setTodos() 메소드로 변수를 다시 저장한다. 
  const onRemoveTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // 완료하기 버튼
  // 완료하기 버튼을 누르면 isDone이 true로 바껴야 함
  const onClickCheck = (id) => {
    setTodos(todos => todos.map(todo =>
      (todo.id === id? {...todo, isDone: !todo.isDone} : todo)
    )
  )
  };

  return (
    <LayoutStyle>
      <Header 
        title={title}
        content={content}
        onChange={onChangeHandler}
        onCreate={onClickHandler}
        />
        <List todos={todos} 
          onRemoveTodo={onRemoveTodo} 
          onClickCheck={onClickCheck} />
    </LayoutStyle>
  );
}

export default TodoList;