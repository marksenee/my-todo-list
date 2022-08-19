import React from 'react';

import Todo from '../todo/Todo';

import FormStyle from './css/FormStyle.jsx';
import CheckStyle from './css/CheckStyle.jsx';
import TitleStyle from './css/TitleStyle.jsx';

function List({ todos, onRemoveTodo, checkTodo }) {
  return (
    <>
      <FormStyle> 
        <CheckStyle>
          <TitleStyle>해야할 일 🔥</TitleStyle>
          <>
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
          </>
        </CheckStyle>
        <CheckStyle>
          <TitleStyle>완료한 일 👍🏻</TitleStyle>
          <>
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
          </>
        </CheckStyle>
      </FormStyle>
    </>
  );
}

export default List;