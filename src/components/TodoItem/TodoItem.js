import React from 'react';
import "./TodoItem.css";
import checkIcon from '../icons/check-box.png';
import { FaTrashAlt } from "react-icons/fa";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span onClick={props.onComplete} className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}>
        <img src={checkIcon} alt="Check icon"/>
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span onClick={props.onDelete} className="Icon-delete" >
      <FaTrashAlt size={30}  />
      </span>
    </li>
  );
}


export { TodoItem };