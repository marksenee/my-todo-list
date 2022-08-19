import React from 'react';

import IndexStyle from './css/IndexStyle';
import ItemListStyle from './css/ItemListStyle';
import ItemStyle from './css/ItemStyle';
import CheckBtnStyle from './css/CheckBtnStyle';

function Todo({ todo, onRemoveTodo, checkTodo }) {
    const { id, title, content, isDone } = todo;
    return (
        <IndexStyle>
            <ItemListStyle> 
              <ItemStyle>☑ {title} : {content}</ItemStyle>
            </ItemListStyle>
            <div>
              <CheckBtnStyle color="#ff80ab" onClick={() => onRemoveTodo(id)}>삭제</CheckBtnStyle>
              {isDone ?
                <CheckBtnStyle color="#8c9eff" onClick={() => checkTodo(id)}>취소</CheckBtnStyle>
                 :  <CheckBtnStyle  color="#b388ff" onClick={() => checkTodo(id)}>완료</CheckBtnStyle>
              }
            </div>
        </IndexStyle>
    )
}

export default Todo;