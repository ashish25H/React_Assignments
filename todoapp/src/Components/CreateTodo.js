import React, { useContext, useState } from "react";
import { todoContext } from "../App";


const Todo = () => {
  const [todoList, setTodoList] = useState([]);

  const todo = useContext(todoContext);
 
  return (
    <div>
      <ul>
        <li>{todo}</li>
      </ul>
    </div>
  );
};

export default Todo;
