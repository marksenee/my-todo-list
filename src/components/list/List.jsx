import React from 'react';

import Todo from '../todo/Todo';

import FormStyle from './css/FormStyle.jsx';
import CheckStyle from './css/CheckStyle.jsx';
import TitleStyle from './css/TitleStyle.jsx';

function List({ todos, onRemoveTodo, onClickCheck }) {
  return (
    <>
      <FormStyle> 
        <CheckStyle>
          <TitleStyle>ν΄μΌν  μΌ π₯</TitleStyle>
          <>
              {todos.filter((todo) => !todo.isDone)
                  .map((progressTodo) => (
                      <Todo 
                      todo={progressTodo} 
                      key={progressTodo.id} 
                      onRemoveTodo={onRemoveTodo} 
                      onClickCheck={onClickCheck}
                  />
                  ))
              }
          </>
        </CheckStyle>
        <CheckStyle>
          <TitleStyle>μλ£ν μΌ ππ»</TitleStyle>
          <>
              {todos.filter((todo) => todo.isDone)
                  .map((doneTodo) => (
                      <Todo 
                        todo={doneTodo} 
                        key={doneTodo.id} 
                        onRemoveTodo={onRemoveTodo} 
                        onClickCheck={onClickCheck}
                  />
                ))
              }
          </>
        </CheckStyle>
      </FormStyle>
    </>
  );
}

export default List;