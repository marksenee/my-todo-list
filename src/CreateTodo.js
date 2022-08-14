import React from 'react';

function CreateTodo({ title, content, onChange, onCreate }) {
  return (
    <div>
      <input
        name="title"
        placeholder="제목"
        onChange={onChange}
        value={title}
      />
      <input
        name="content"
        placeholder="내용"
        onChange={onChange}
        value={content}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default CreateTodo;