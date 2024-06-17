import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  padding: 10px 15px;
  border-radius: 4px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const ItemText = styled.span`
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  flex: 1;
  text-align: center;
  color: ${({ completed }) => (completed ? '#aaa' : '#333')};
  cursor: pointer;
  transition: color 0.3s, text-decoration 0.3s;
`;

const Button = styled.button`
  margin-left: 10px;
  background: none;
  border: none;
  color: #ff6347;
  cursor: pointer;
  font-size: 0.9em;

  &:hover {
    color: #e53e3e;
  }
`;

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <Item>
      <FontAwesomeIcon
        icon={faCheckCircle}
        style={{ color: todo.completed ? 'green' : 'lightgrey', cursor: 'pointer', marginRight: '10px' }}
        onClick={() => onToggle(todo.id)}
      />
      <ItemText completed={todo.completed} onClick={() => onToggle(todo.id)}>
        {todo.text}
      </ItemText>
      <Button onClick={() => onDelete(todo.id)}>삭제</Button>
    </Item>
  );
};

export default TodoItem;
