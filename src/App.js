import List from "./components/List";
import Form from "./components/Form";

function App() {
  return (
  <div className="w-full h-screen bg-zinc-800 flex flex-col gap-y-10 justify-center items-center">
    <h1 className="text-4xl text-center text-white font-bold" >Your ToDo List</h1>
    <Form />
    <List />
   
  </div>
  );
}

export default App;
