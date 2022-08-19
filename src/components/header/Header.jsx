import React from 'react';

import Form from '../form/Form';

import HeaderStyle from './css/HeaderStyle';
import MainTitleStyle from './css/MainTitleStyle';

function Header({ title, content, onChange, onCreate }) {
  return (
    <HeaderStyle>
      <MainTitleStyle>투두리스트</MainTitleStyle>
      <Form 
        title={title}
        content={content}
        onChange={onChange}
        onCreate={onCreate}
        />
    </HeaderStyle>
  );
}

export default Header;