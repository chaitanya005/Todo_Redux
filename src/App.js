import React from 'react';
import Input from './components/input'
import './App.css';
import TodoItem from './components/TodoItem'
import { useSelector } from 'react-redux'
import { getTodoList } from './features/todoSlice'

function App() {

  const todoList = useSelector(getTodoList)

  return (
    <div className="app">
      <div className = "app__container">
        <div className = "app__todoContainer">
          {
            todoList.map(item => (
              <TodoItem 
              todo = {item.item} 
              done = {item.done}
              id = {item.id}
              />
            ))
          }
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
