import React from 'react';
import TodoList from './components/TodoList';
import { Container, CssBaseline } from '@mui/material';
import './App.css';

function App() {
  return (
    <Container maxWidth="md">
      <CssBaseline />
      <TodoList />
    </Container>
  );
}

export default App;
