const TodoItemsReducer = (currentTodoItems, action) => {

    switch(action.type){
      case 'ADD_ITEM':{
        // const todoText = action.payload.todoText;
        // const todoData = action.payload.todoData;
        const { todoText, todoData } = action.payload;
        return [...currentTodoItems, {id: Date.now(), todoText: todoText, todoDate: todoData}];
      }
      case 'DELETE_ITEM':{
        // const id = action.payload.id;
        const { id } = action.payload;
        return currentTodoItems.filter(item => item.id !== id);
      }
      case 'LOAD_ALL_ITEMS':{
        return action.payload.allItems;
      }
      default:{
        return currentTodoItems;
      }
    }

}

export default TodoItemsReducer;