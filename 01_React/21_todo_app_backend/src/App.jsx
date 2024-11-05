import React from "react";
import { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import InitialTodoItems from "./store/initialTodoItems";
import {TodoItemsProvider}  from "./store/TodoItemsContext";
import LoadItems from "./components/LoadItems";

function App() {

  // const [todoItems, setTodoItems] = useState(InitialTodoItems);
  // // console.log(todoItems);

  // const addTodoItem = (todoText, todoData) => {
  //   setTodoItems(currentTodoItems => [...currentTodoItems, {id: todoItems.length + 1, todoText: todoText, todoDate: todoData}]);
  // }

  // const deleteTodoItem = (id) => {
  //   // console.log(`Deleting item id: ${id}`);

  //   setTodoItems(currentTodoItems => currentTodoItems.filter(item => item.id !== id));
  // };

  return (
    // <React.Fragment>
    <TodoItemsProvider>
      <AppName />
      <AddTodo />
      <LoadItems />
      <TodoItems />
    </TodoItemsProvider>
      
    
    // </React.Fragment>
  );
}

export default App;
