import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);
  const inputRef = useRef();

  const AddTask = () => { 
    const task = inputRef.current.value; 
    setToDos([...toDos,task]); 
  };

  return (
    <div className="App">
      {/* so we start an input an button to add your tasks */}
      <input type='text' ref={inputRef} />
      <button onClick={AddTask}> Add task </button>
      <ul>
        { toDos.map((task,index)=> (
          <li key={index}>{task}</li>
        ))}

      </ul>


    </div>
  );
}

export default App;
