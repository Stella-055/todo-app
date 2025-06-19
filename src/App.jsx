import {  useState } from "react";

import "./App.css";


function App() {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [alltasks, setAlltasks] = useState([
   
  ]);

  function Additems(e) {
    e.preventDefault();
    if (task === "" || description === "") {
      alert("Please fill in both fields");
      return;
    }
    const newtask = {
      task: task,
      description: description,
    };
    setAlltasks([...alltasks, newtask]);
    setTask("");
    setDescription("");
  }
  return (
    <div className="App">
      <h1>TODO APPLICATION</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Task eg.Read"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description eg Read about trees"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={Additems}>ADD</button>
      </div>
      {alltasks.length !==0 && 
      <table>
        <thead>
          <tr>
          <th>Item No</th>
            <th>Task</th>
            <th>Description</th>
            
          </tr>
        </thead>
        <tbody>
          {alltasks.map((task, index) => {
            return (
              <tr key={index}>
                <td>{index +1}</td>
                <td>{task.task}</td>
                <td>{task.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
        }
    </div>
  );
}

export default App;
