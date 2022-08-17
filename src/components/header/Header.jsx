import React from 'react';

import Form from '../form/Form';

import './style.css'

function Header({ title, content, onChange, onCreate }) {
  return (
    <div className='create'>
      <h3 className='h3'>투두리스트</h3>
      <Form 
        title={title}
        content={content}
        onChange={onChange}
        onCreate={onCreate}
        />
    </div>
  );
}

export default Header;