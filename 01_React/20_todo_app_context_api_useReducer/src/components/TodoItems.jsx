import TodoItem from "./TodoItem";
import { useContext } from "react";
// import TodoItemsContext from "../store/TodoItemsContext";
import {TodoItemsContext} from "../store/TodoItemsContext";

const TodoItems = () => {

    const {todoItems} = useContext(TodoItemsContext);

    return (
    <>
        {todoItems.map((todoItem) => <TodoItem key={todoItem.id} id={todoItem.id} todoText={todoItem.todoText} todoDate={todoItem.todoDate}/>)}
    </>
    );
}

export default TodoItems;