import React, { useState } from 'react';
import _ from 'lodash';

const TodoList = () => {
 const [inputValue, setInputValue] = useState('');
 const [todoState, setTodoState] = useState([]);

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

   setInputValue('');
  }
   
  return (
    <div>
      <input value={inputValue} onChange = {handleInputValue}/>
      <button onClick={handleClick}>ADICIONAR</button>
      { todoState.map((todo, i) => (
        <div key={i} >
            <p>{todo.todoTitle}</p>
        </div>
      ))}
    </div>
  )
}

export default TodoList;
