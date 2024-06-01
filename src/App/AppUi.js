import React from 'react';
import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { CreateTodoButton } from '../components/CreateButton/CreateTodoButton';
import { TodoContext } from '../components/TodoContext/TodoContext';
import { Modal } from '../components/Modal/modal';
import { TodoForm } from '../components/TodoForm/TodoForm';

function AppUI(){
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

    return (
    <> {/* para que sea invisible en la visualizacion del navegador al inspeccionar */}
    <TodoSearch />
    
    <TodoCounter/>
  
      <TodoList>
        {loading && <p>Estamos Cargando... </p>} 
        {error && <p>Hay un error!! </p>} 
        {(!loading && searchedTodos.lenght === 0 ) && <p>Crea tu primer To Do!! </p>} 

        {searchedTodos.map(todo =>(
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed} 
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          
          />
        ))}
        
      </TodoList>
          
    <CreateTodoButton 
    
      setOpenModal = {setOpenModal}
    />

    {openModal && (

      <Modal>
        <TodoForm/>
        
      </Modal>
    )}

  </>
    );
}

export { AppUI };