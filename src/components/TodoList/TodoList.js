import './TodoList.css'
import perritoTodo from '../../assets/perritoTodo.png';


function TodoList({children}){
    
    return(
    <div className="fondoList">
        <div className='titulo'> 
        <h1>To do list</h1>
        <img src={perritoTodo} alt="perrito to do" />
        </div>
            
            <ul>
                {children}
            </ul>
       
    </div>
    );
    
  
  }

export {TodoList};