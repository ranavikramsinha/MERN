import TodoItem from "./TodoItem";

const TodoItems = () => {
    const todoItems = [{id: 1, todoText: 'Buy milk', todoDate: '6-Sept-2024'},
        {id: 2, todoText: 'Go for Walk', todoDate: '6-Sept-2024'},
        {id: 3, todoText: 'Learn React', todoDate: '6-Sept-2024'}];

    return (
    <>
        {todoItems.map((todoItem) => <TodoItem key={todoItem.id} todoText={todoItem.todoText} todoDate={todoItem.todoDate} />)}
    </>
    );
}

export default TodoItems;