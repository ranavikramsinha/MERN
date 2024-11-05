// import TodoItemsContext from "../store/TodoItemsContext";
import {TodoItemsContext} from "../store/TodoItemsContext";
import { todoItemToClient } from "../utils/ModelUtil";
import Button from "./Button";
import { useRef , useContext  } from "react";

const AddTodo = () => {

  const todoTextInputRef = useRef(null);
  const todoDateInputRef = useRef(null);
  const {addTodoItem} = useContext(TodoItemsContext);

  const addHandler = () => {
    const todoText = todoTextInputRef.current.value.trim();
    const todoDate = todoDateInputRef.current.value;

    if (!todoText || !todoDate) {
      alert("Both fields are required.");
      return;
    }

    const id = Date.now();

    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        task: todoText,
        date: todoDate,
      }),
      }).then((response) => response.json())
        .then(serverItem => {
          const {id, todoText, todoDate} = todoItemToClient(serverItem);
          addTodoItem(id, todoText, todoDate);
      })

    // addTodoItem(id, todoText, todoDate);

    console.log(`Adding new item ${todoTextInputRef.current.value} (${todoDateInputRef.current.value})`);

    todoTextInputRef.current.value = "";
    todoDateInputRef.current.value = "";
  };

  // const textChangeHandler = (event) => {
  //   console.log(event.target.value, event);
  // };

  return (
    <div className="container">
      <div className="row todoList-row">
        <div className="col-5">
          <input
            type="text"
            id="todoTextInput"
            name="todoTextInputArea"
            className="form-control"
            placeholder="Enter Todo Here"
            // onChange={textChangeHandler}
            ref={todoTextInputRef}
          ></input>
        </div>
        <div className="col-5">
          <input type="date" ref={todoDateInputRef} className="form-control"></input>
        </div>
        <div className="col-2">
          <Button btnType="success" btnText="Add" handler={addHandler} />
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
