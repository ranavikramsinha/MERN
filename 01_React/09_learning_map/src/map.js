const todoItems = [
    {id: 1, todoText: 'Buy milk', todoDate: '6-Sept-2024'},
    {id: 2, todoText: 'Go for Walk', todoDate: '6-Sept-2024'},
    {id: 3, todoText: 'Learn React', todoDate: '6-Sept-2024'}
  ];

  console.log("----------Starting using Map-----------");

  const todoItemsText = todoItems.map(todoItem => todoItem.todoText);

  console.log(todoItemsText);

  console.log("----------Ending using Map------------");

  // function convertObjectToTodoText(todoItem){
  //   console.log(`Convert function was called with item ${JSON.stringify(todoItem)}, coverting this to ${todoItem.todoText}`);

  //   return todoItem.todoText;
  // }
  
  // console.log("----------Starting-----------");

  // const todoItemsText = [];
  // todoItems.forEach(item => {
  //   const str = convertObjectToTodoText(item);
  //   todoItemsText.push(str);
  // });

  // console.log(todoItemsText);

  // console.log("----------Ending------------");