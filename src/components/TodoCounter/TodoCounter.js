import './TodoCounter.css' /* como ya esta dentro de la la carpeta components no es necesario especificarla */
import React from 'react'
import { TodoContext } from '../TodoContext/TodoContext';

function TodoCounter({ total, completed }){
  
  const {completedTodos, totalTodos} = React.useContext(TodoContext);

  return(
      <div className='cajaPendientes'>
      <span>
        <p>Completada ({completedTodos})</p>
        
      </span>
      <span>
        <p>Totales ({totalTodos})</p>
        </span>
      
      
      </div>
    );
  
  }

export {TodoCounter};