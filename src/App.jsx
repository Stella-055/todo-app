import { use, useState } from "react";

import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [alltasks, setAlltasks] = useState([
    { task: "read", description: "Read about trees" },
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
          placeholder="task eg.Read"
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
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {alltasks.map((task, index) => {
            return (
              <tr key={index}>
                <td>{task.task}</td>
                <td>{task.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
