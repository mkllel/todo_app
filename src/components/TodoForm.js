import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  font-size: 1em;
  outline: none;

  &:focus {
    border-color: #6200ea;
  }
`;

const Button = styled.button`
  padding: 10px;
  background-color: #6200ea;
  color: #fff;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: #3700b3;
  }
`;

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="오늘 할 일을 입력하세요"
      />
      <Button type="submit">추가</Button>
    </Form>
  );
};

export default TodoForm;
