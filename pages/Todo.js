import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";



const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed ? "checked" : ""}
        />
       
      </div>
    
    </li>
  );
};

export default Todo;
