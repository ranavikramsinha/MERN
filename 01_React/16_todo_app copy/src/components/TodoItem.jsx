import Button from "./Button";

const TodoItem = ({id, todoText, todoDate}) => {

  const deleteHandler = (event) => {
    console.log(event);
    console.log(`deleteHandler Clicked ${id} ${todoText}`);
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
            <Button btnType="danger" btnText="Delete" handler={deleteHandler}/>
          </div>
        </div>
      </div>
    )
}

export default TodoItem;