import Button from "./Button";
import { useContext } from "react";
// import TodoItemsContext from "../store/TodoItemsContext";
import {TodoItemsContext} from "../store/TodoItemsContext";

const TodoItem = ({ id, todoText, todoDate }) => {

  const {deleteTodoItem} = useContext(TodoItemsContext);

  const deleteHandler = (event) => {
    console.log(event);
    console.log(`Deleting item id and text: ${id} and ${todoText}`);
  }

    return (
      <div className="container">
        <div className="row todoList-row">
          <div className="col-5 text-truncate">
              <h4>{todoText}</h4>
          </div>
          <div className="col-5 text-truncate">
              <h4>{todoDate}</h4>
          </div>
          <div className="col-2">
            {/* <Button btnType="danger" btnText="Delete" handler={deleteHandler}/> */}
            <Button btnType="danger" btnText="Delete" handler={() => deleteTodoItem(id, todoText)}/>
          </div>
        </div>
      </div>
    )
}

export default TodoItem;