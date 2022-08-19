import React, { useState } from "react";

import Header from "../components/header/Header";
import List from "../components/list/List";

import LayoutStyle from "../components/layout/css/LayoutStyle";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, checkTodo } from '../redux/modules/todos'

function TodoList() {

  const dispatch = useDispatch();
  // const todo_data = useSelector(state => state.todos);
  const { todos } = useSelector((state) => state.todos); // initialstate 안에 있는 todos를 가져온 것 



  const data = useSelector((state) => {
    console.log(state);
    return state;
  })
  console.log(data);


  // 객체 형태로 두 input 태그의 name 속성값을 초기화 
  const [ inputs, setInputs ] = useState({
    title: '',
    content: '',
    isDone: false
  });

  // 구조분해 할당을 통해 값 추출 
  const { id, title, content, isDone } = inputs; 

  // const [ todos, setTodos ] = useState([
  //   {
  //     id: 1,
  //     title : "리액트",
  //     content: "리액트 hooks 공부하기",
  //     isDone: false
  //   },
  //   {
  //     id: 2,
  //     title : "TIL",
  //     content: "매일 TIL 작성하기",
  //     isDone: true
  //   },
  //   {
  //     id: 3,
  //     title : "WIL",
  //     content: "일요일 WIL 제출하기",
  //     isDone: false
  //   },
  //   {
  //     id: 4,
  //     title : "JavaScript",
  //     content: "JavaScript 공부하기",
  //     isDone: false
  //   }
  // ]); // 객체 배열 넣기 

  const onChangeHandler = (event) => {
    console.log(event.target.value)
    const { name, value } = event.target; //event.target에서 name과 value 추출 
    console.log("name:" , name , " [name]:" , [name], " value:", value); //name: title  [name]: ['title']  value: "내가 입력하고 있는 값"
    
    setInputs({
      ...inputs, // 기존 inputs 객체 복사 
      [name]: value // name 키를 가진 값을 value로 변경 
    });
  };

  // 등록하기 
  const onClickHandler = () => {
    // // 제목과 내용을 입력하지 않을 경우 등록이 안되도록 제어
    if (title === '' || content === '') {
        return alert('제목과 내용을 입력하세요')
    } else {
        dispatch(addTodo(title, content))
    };

    // input 초기화
    setInputs({
      title: '',
      content: ''
    });
  }

  // todo 삭제
  // id를 인자로 받아서 해당 id 값을 가진 요소를 제외한 배열을 필터링해서 setTodos() 메소드로 변수를 다시 저장한다. 
  const onRemoveTodo = (id) => {
    dispatch(deleteTodo(id))
  }

  // 완료하기 버튼
  // 완료하기 버튼을 누르면 isDone이 true로 바껴야 함
  const checkTodo = (id) => {
    // setTodos(todos => todos.map(todo =>
    //     (todo.id === id? {...todo, isDone: !todo.isDone} : todo)
    //   )
    // )
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
          checkTodo={checkTodo} />
    </LayoutStyle>
  );
}

export default TodoList;