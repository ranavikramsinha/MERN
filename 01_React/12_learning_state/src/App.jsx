import {useState} from "react";
import List from "./components/list";

function App() {

  console.log("Paint App Component");

  const [users, setUsers] = useState(["Aryan", "Rana", "Rudraksh", "Parker", "Sam", "Andrew"]);

  // const usersState = useState(["Aryan", "Rana", "Rudraksh", "Parker", "Sam", "Andrew"]);
  // const users = usersState[0];
  // const setUsers = usersState[1];
  console.log("State Value is:", users);

  // console.log(users);

  const onChangeHandler = (event) => {
    if(event.key === "Enter"){
      console.log(event.target.value);
      // users.push(event.target.value);
      const newArr = [...users, event.target.value];
      setUsers(newArr);
      event.target.value = "";
      console.log(users);
    }
    
  }
  
  return (
    <>
      <h1 className="text-5xl font-semibold">
        Learning React
      </h1>
    <List lists={users}></List>
    <input type="text" placeholder="New Student Name" onKeyDown={onChangeHandler} className="m-1 text-black"/>
    </>
  )

}

export default App;