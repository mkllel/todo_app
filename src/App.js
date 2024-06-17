import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const Container = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const DateContainer = styled.div`
  margin-bottom: 20px;
  font-size: 1.2em;
  font-weight: bold;
  color: #555;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 20px;
`;

const App = () => {
  const [todos, setTodos] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const today = new Date();
    const storedDate = localStorage.getItem('date');
    const storedTodos = localStorage.getItem('todos');

    if (!storedDate || new Date(storedDate).toDateString() !== today.toDateString()) {
      localStorage.setItem('date', today.toDateString());
      setTodos([]);
    } else if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const updateDate = () => {
      setCurrentDate(new Date());
    };

    const intervalId = setInterval(updateDate, 1000 * 60 * 60 * 24); 
    return () => clearInterval(intervalId);
  }, []);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => (
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const formattedDate = currentDate.toLocaleDateString('ko-KR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Container>
      <GlobalStyles />
      <DateContainer>{formattedDate}</DateContainer>
      <Title>할 일 목록</Title>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </Container>
  );
};

export default App;
