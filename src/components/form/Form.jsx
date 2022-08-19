import React from 'react';

import ContainerStyle from './css/ContainerStyle';
import SpanStyle from './css/SpanStyle';
import InputStyle from './css/InputStyle';
import CreateBtnStyle from './css/CreateBtnStyle';

function Form({ title, content, onChange, onCreate }) {
  return (
      <ContainerStyle>
        <SpanStyle>제목</SpanStyle>
        <InputStyle 
          name="title"
          placeholder="제목"
          onChange={onChange}
          value={title}>
        </InputStyle>
        <SpanStyle>내용</SpanStyle>
        <InputStyle 
          name="content"
          placeholder="내용"
          onChange={onChange}
          value={content}>
        </InputStyle>
        <CreateBtnStyle onClick={onCreate}>등록</CreateBtnStyle>
      </ContainerStyle>
  );
}

export default Form;