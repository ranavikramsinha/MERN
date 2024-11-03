import { createContext, useState } from "react";
import InitialTodoItems from "./initialTodoItems";

export const TodoItemsContext = createContext();

// const TodoItemsContext = createContext();

export const TodoItemsProvider = ({ children }) => {

    const [todoItems, setTodoItems] = useState(InitialTodoItems);
    // console.log(todoItems);
  
    const addTodoItem = (todoText, todoData) => {
      setTodoItems(currentTodoItems => [...currentTodoItems, {id: todoItems.length + 1, todoText: todoText, todoDate: todoData}]);
    }
  
    const deleteTodoItem = (id) => {
      // console.log(`Deleting item id: ${id}`);
  
      setTodoItems(currentTodoItems => currentTodoItems.filter(item => item.id !== id));
    };

    return (
        <TodoItemsContext.Provider value={{todoItems, addTodoItem, deleteTodoItem}}>
            {children}
        </TodoItemsContext.Provider>
    )

}

// export default TodoItemsContext;