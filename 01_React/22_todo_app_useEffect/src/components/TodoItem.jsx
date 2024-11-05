import Button from "./Button";
import { useContext } from "react";
// import TodoItemsContext from "../store/TodoItemsContext";
import {TodoItemsContext} from "../store/TodoItemsContext";

const TodoItem = ({ id, todoText, todoDate }) => {

  const {deleteTodoItem} = useContext(TodoItemsContext);

  // const deleteHandler = (event) => {
  //   console.log(event);
  //   console.log(`Deleting item id and text: ${id} and ${todoText}`);
  // }

  const deleteHandler = () => {
    console.log(`Deleting item id: ${id}`);

    fetch(`http://localhost:3000/todos/${id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => deleteTodoItem(data.id))
    .catch(error => console.log(error));
  }

    return (
      <div className="container">
        <div className="row todoList-row">
        {/* <div className="col-5 "> */}
          <div className="col-5">
              <div className="todo-text">{todoText}</div>
          </div>
          {/* <div className="col-5 "> */}
          <div className="col-5 d-flex justify-content-center align-items-center">
              <div className="todo-text">{todoDate}</div>
          </div>
          <div className="col-2">
            {/* <Button btnType="danger" btnText="Delete" handler={deleteHandler}/> */}
            {/* <Button btnType="danger" btnText="Delete" handler={() => deleteTodoItem(id)}/> */}
            <Button btnType="danger" btnText="Delete" handler={deleteHandler}/>
          </div>
        </div>
      </div>
    )
}

export default TodoItem;