import React from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import TestForm from "./components/TestForm";
import StateVsRef from "./components/StateVsRef";

function App() {

  return (
    // <React.Fragment>
    <>
      <StateVsRef />
      {/* <AppName /> */}
      {/* <TestForm /> */}
      {/* <AddTodo />
      <TodoItems /> */}
    </>
    // </React.Fragment>
  );
}

export default App;
