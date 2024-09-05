import Button from "./Button";

const TodoItem = ({id, todoText, todoDate}) => {

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
            <Button btnType="danger" btnText="Delete"/>
          </div>
        </div>
      </div>
    )
}

export default TodoItem;