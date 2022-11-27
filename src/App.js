import List from "./components/List";
import Form from "./components/Form";
import { useEffect, useState } from "react";
import { api } from "./api/api";

function App() {

  const [tasks, setTasks] = useState([])

  const fetchData = async() => {
    const data = await api.get("/todolist")

    console.log(data)
  }

  useEffect(() => {
    fetchData()
  },[])


  return (
      <div className="w-full h-screen bg-zinc-800 flex flex-col gap-y-10 justify-center items-center">
          <h1 className="text-4xl text-center text-white font-bold" >Your ToDo List</h1>
          <Form />
          <List tasks={tasks}/>
      </div>
  );
}

export default App;
