import React from 'react';

import './style.css'

function Form({ title, content, onChange, onCreate }) {
  return (
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
  );
}

export default Form;