import TodoItem from "./TodoItem";

const TodoItems = ({todoItems, deleteTodoItem}) => {

    return (
    <>
        {todoItems.map((todoItem) => <TodoItem key={todoItem.id} id={todoItem.id} todoText={todoItem.todoText} todoDate={todoItem.todoDate} deleteTodoItem={deleteTodoItem}/>)}
    </>
    );
}

export default TodoItems;