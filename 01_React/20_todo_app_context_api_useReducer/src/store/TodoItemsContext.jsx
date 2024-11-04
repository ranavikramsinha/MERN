import { createContext, useReducer, useState } from "react";
import InitialTodoItems from "./initialTodoItems";

export const TodoItemsContext = createContext();

// const TodoItemsContext = createContext();

const todoItemsReducer = (currentTodoItems, action) => {

  switch(action.type){
    case 'ADD_ITEM':{
      // const todoText = action.payload.todoText;
      // const todoData = action.payload.todoData;
      const { todoText, todoData } = action.payload;
      return [...currentTodoItems, {id: currentTodoItems.length + 1, todoText: todoText, todoDate: todoData}];
    }
    case 'DELETE_ITEM':{
      // const id = action.payload.id;
      const { id } = action.payload;
      return currentTodoItems.filter(item => item.id !== id);
    }
    default:{
      return currentTodoItems;
    }
  }

}

export const TodoItemsProvider = ({ children }) => {

    const [todoItems, todoItemsDispatch] = useReducer(todoItemsReducer, InitialTodoItems);
    // console.log(todoItems);
  
    const addTodoItem = (todoText, todoData) => {
      todoItemsDispatch({
        type: 'ADD_ITEM',
        payload: {
          todoText: todoText,
          todoData: todoData,
        }
      });

      // setTodoItems(currentTodoItems => [...currentTodoItems, {id: todoItems.length + 1, todoText: todoText, todoDate: todoData}]);
    }
  
    const deleteTodoItem = (id) => {
      // console.log(`Deleting item id: ${id}`);

      todoItemsDispatch({
        type: 'DELETE_ITEM',
        payload: {
          id: id,
        }
      });
  
      // setTodoItems(currentTodoItems => currentTodoItems.filter(item => item.id !== id));
    };

    return (
        <TodoItemsContext.Provider value={{todoItems, addTodoItem, deleteTodoItem}}>
            {children}
        </TodoItemsContext.Provider>
    )

}

// export default TodoItemsContext;