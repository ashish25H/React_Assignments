import React, { createContext, useState } from "react";
import CreateTodo from "./Components/CreateTodo";
export const todoContext = createContext();

function App() {
  const [todo, setTodo] = useState();
  // const [todoList,setTodoList] = useState([]);

  // const todoList = [];
  const getTodo = () => {
    const todoInput = document.getElementById("todoInput");
    todoInput.value ? setTodo(todoInput.value) : alert("Enter any Task here");
    todoInput.value = "";
  };

  

  // console.log(todoList);

  return (
    <todoContext.Provider value={todo}>
      <div className="bg-[#03203C]  text-[#758283]">
        <h1 className="text-center text-5xl font-semibold p-4">TODO APP</h1>

        <div className="flex justify-center items-center p-9 flex-col">
          <input
            className="px-5 py-2 outline-none rounded-md"
            type={"text"}
            name="todoInput"
            placeholder="Enter Your Task"
            id="todoInput"
          />
          <button
            className="bg-[#1B98F5] text-[#fff] my-3 p-1 rounded-sm"
            id="todoBtn"
            onClick={getTodo}
          >
            Add Todo
          </button>
        </div>
      </div>
      <CreateTodo />
    </todoContext.Provider>
  );
}

export default App;
