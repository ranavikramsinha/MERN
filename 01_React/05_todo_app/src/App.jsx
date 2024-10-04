import React from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";

function App() {

  return (
    // <React.Fragment>
    <>
      <AppName />
      <AddTodo />
      <TodoItems />
    </>
    // </React.Fragment>
  );
}

export default App;
