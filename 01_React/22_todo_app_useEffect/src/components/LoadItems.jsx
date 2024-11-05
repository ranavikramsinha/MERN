import React from "react";
import { useContext } from "react";
import { TodoItemsContext } from "../store/TodoItemsContext";
import Button from "./Button";
import { useEffect } from "react";
import { useState } from "react";

const LoadItems = () => {
  const { todoItems, addAllTodoItems } = useContext(TodoItemsContext);

  const [isLoading, setIsLoading] = useState(false);

  // if(todoItems.length !== 0){
  //     return (
  //         <></>
  //     )
  // }

  useEffect(() => {
    setIsLoading(true);
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => {
        const newItems = data.todos.map((item) => ({
          id: item.id,
          todoText: item.todo,
        }));
        addAllTodoItems(newItems);
      })
      .catch((error) => console.error("Failed to load items:", error))
      .finally(() => setIsLoading(false));

    console.log("Load items clicked");
  }, []);

  // const loadTodoItemsHandler = () => {
  //     fetch('https://dummyjson.com/todos')
  //       .then(res => res.json())
  //       .then(data => {
  //         const newItems = data.todos.map(item => ({
  //           id: item.id,
  //           todoText: item.todo,
  //         }));
  //         addAllTodoItems(newItems);
  //       })
  //       .catch(error => console.error("Failed to load items:", error));

  //     console.log("Load items clicked");
  //   };

  return (
    <>
      {isLoading && (
        <div className="d-flex justify-content-center align-items-center">
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      )}
      {!isLoading && todoItems.length === 0 && (
        <div className="text-center fs-5">No items to show</div>
      )}
    </>
  );
  
};

export default LoadItems;
