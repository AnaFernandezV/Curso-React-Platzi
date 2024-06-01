import { AppUI } from '../App/AppUi';
import React from 'react';
import { TodoProvider } from '../components/TodoContext/TodoContext';



/* esto es un componente  */

function App() {
  return (
   <TodoProvider>
      <AppUI/>
   </TodoProvider>
  
  );
}



export default App;
