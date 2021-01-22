import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import {
        Container,
        StyledButton,
        StyledInput,
        StyledLabel,
        ListContainer,
        TodoItem,
        TodoTitle 
      } from './styles';

import Done from '../../assets/done.svg';
import Remove from '../../assets/remove.svg';

const TodoList = () => {
 const [inputValue, setInputValue] = useState('');
 const [todoState, setTodoState] = useState([]);

useEffect(() =>  {
  if (!_.isEmpty(localStorage.getItem('todos'))) {
    const localStorageTodos = JSON.parse(localStorage.getItem('todos'));

    setTodoState(localStorageTodos);
  }

}, []);

 useEffect(() => {
   if(!_.isEmpty(todoState)){
     localStorage.setItem('todos', JSON.stringify(todoState))
   }
  setInputValue('')}, [todoState])


 const handleInputValue = evento => {
  setInputValue(evento.target.value);

}

const handleClick = () =>{
  if(!inputValue) return;
  
  const newTodo =  {
    todoTitle: inputValue,
    todoStatus:false
     
  }

   setTodoState(prevState => ([
     ...prevState,
      newTodo
   ]));

   
  }

const handleStatus = (todo, id) =>{
  const {todoStatus, todoTitle} = todo;

  setTodoState(prevState => {
    return prevState.filter((prevTodo, index) => {
      return index !== id;
    });
  });

  const newTodo = {
    todoTitle,
    todoStatus: !todoStatus
  }

  if(todoState.length === 1 && todoStatus === true) {
    setTodoState([]);
    localStorage.setItem('todos', JSON.stringify([]));
    return;
  }

  if(todoStatus === false){
    setTodoState(prevState => ([
      ...prevState,
      newTodo
    ]));
  }
};

  return (
    <Container>
    <div>
      <StyledLabel>Nova tarefa</StyledLabel>
      <div>
      <StyledInput placeholder='Ex.: Caminhar' value={inputValue} onChange = {handleInputValue}/>
      <StyledButton onClick={handleClick}>ADICIONAR</StyledButton>
      </div>
      </div>
      <ListContainer>
      { todoState.map((todo, i) => (
        <TodoItem key={i} onClick={ () => handleStatus(todo , i)}>
          <img 
          src={todo.todoStatus === false ? Done : Remove} 
          alt="status icon"
          />
            <TodoTitle status={todo.todoStatus}>{todo.todoTitle}</TodoTitle>
        </TodoItem>
      ))}
    </ListContainer>
    </Container>
  )
}

export default TodoList;
