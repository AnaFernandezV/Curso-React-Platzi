import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext/TodoContext';

function TodoSearch(){
    const {searchValue,setSearchValue} = React.useContext(TodoContext);

    return(
    <div className="caja-search">
        <input 
        placeholder="Cortar Cebolla"
        value={searchValue} 
        onChange={(event) => {

            setSearchValue(event.target.value)
        }


        } />
   </div>
    );
  
}

export { TodoSearch };