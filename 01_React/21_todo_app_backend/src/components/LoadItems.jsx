import React from 'react'
import { useContext } from 'react'
import {TodoItemsContext} from '../store/TodoItemsContext'
import Button from './Button'

const LoadItems = () => {

    const {todoItems, addAllTodoItems} = useContext(TodoItemsContext);

    if(todoItems.length !== 0){
        return (
            <></>
        )
    }

    const loadTodoItemsHandler = () => {
        fetch('https://dummyjson.com/todos')
          .then(res => res.json())
          .then(data => {
            const newItems = data.todos.map(item => ({
              id: item.id,
              todoText: item.todo,
            }));
            addAllTodoItems(newItems);
          })
          .catch(error => console.error("Failed to load items:", error));
          
        console.log("Load items clicked");
      };

  return (
    <>
        <div className="text-center">
            <div className='fs-3 fw-bold'>No items to show</div>
            {/* <button className='btn btn-primary'>Load Todo Items</button> */}
            <Button btnText="Load Todo Items" btnType="primary" handler={loadTodoItemsHandler}></Button>
        </div>
    </>
  )
}

export default LoadItems