import './Createbutton.css';

function CreateTodoButton({setOpenModal}){
    return(
        <button className="createbutton" onClick={
          () => {
            setOpenModal(state => !state);
          }
        }
          >Agregar To Dos</button>
    );
  

  }

export { CreateTodoButton };