import List from "./components/list";

function App() {

  const users = ["Aryan", "Rana", "Rudraksh", "Parker", "Sam", "Andrew"];
  
  return (
    <>
      <h1 className="text-5xl font-semibold">
        Learning React
      </h1>
    <List lists={users}></List>
    </>
  )

}

export default App;
