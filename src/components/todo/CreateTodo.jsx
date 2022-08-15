import React from 'react';
import './style.css'

function CreateTodo({ title, content, onChange, onCreate }) {
  return (
    <div className='create'>
      <h3 className='h3'>투두리스트</h3>
      <div className='container'>
        <span className='span'>제목</span>
        <input
          className='input'
          name="title"
          placeholder="제목"
          onChange={onChange}
          value={title}
        />
        <span className='span'>내용</span>
        <input
          className='input'
          name="content"
          placeholder="내용"
          onChange={onChange}
          value={content}
        />
        <button className='btn' onClick={onCreate}>등록</button>
      </div>
    </div>
  );
}

export default CreateTodo;