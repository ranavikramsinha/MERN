import Button from "./Button";

const AddTodo = () => {

  const addHandler = () => {
    console.log(`addHandler Clicked`);
  }

    return (
        <div className="container">
        <div className="row todoList-row">
          <div className="col-5">
            <input type="text" className="form-control" placeholder="Enter Todo Here"></input>
          </div>
          <div className="col-5">
            <input type="date" className="form-control"></input>
          </div>
          <div className="col-2">
            <Button btnType="success" btnText="Add" handler={addHandler}/>
          </div>
        </div>
      </div>
    )
}

export default AddTodo;