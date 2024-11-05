// import TodoItemsContext from "../store/TodoItemsContext";
import {TodoItemsContext} from "../store/TodoItemsContext";
import Button from "./Button";
import { useRef , useContext  } from "react";

const AddTodo = () => {

  const todoTextInputRef = useRef(null);
  const todoDataInputRef = useRef(null);
  const {addTodoItem} = useContext(TodoItemsContext);

  const addHandler = () => {
    const todoText = todoTextInputRef.current.value.trim();
    const todoData = todoDataInputRef.current.value;

    if (!todoText || !todoData) {
      alert("Both fields are required.");
      return;
    }

    addTodoItem(todoText, todoData);

    console.log(`Adding new item ${todoTextInputRef.current.value} (${todoDataInputRef.current.value})`);

    todoTextInputRef.current.value = "";
    todoDataInputRef.current.value = "";
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
          <input type="date" ref={todoDataInputRef} className="form-control"></input>
        </div>
        <div className="col-2">
          <Button btnType="success" btnText="Add" handler={addHandler} />
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
