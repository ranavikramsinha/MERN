const TodoItemsReducer = (currentTodoItems, action) => {

    switch(action.type){
      case 'ADD_ITEM':{
        // const todoText = action.payload.todoText;
        // const todoDate = action.payload.todoDate;
        const { id, todoText, todoDate } = action.payload;
        return [...currentTodoItems, {id: id, todoText: todoText, todoDate: todoDate}];
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