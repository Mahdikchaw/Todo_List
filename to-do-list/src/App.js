import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);
  const inputRef = useRef();

  const AddTask = () => { 
    console.log('#####',inputRef.current.value)
    const task = inputRef.current.value; 
    const newItem = { 
      text : task, 
      finished : false
    } ; 
    setToDos([...toDos,newItem]); 
    inputRef.current.value = '';


  }; 

  const itemDone = (index) => { 
    const newToDos = [...toDos];
    newToDos[index].finished = !newToDos[index].finished; 
    setToDos(newToDos);
  } ;

  return (
    <div className="App">
      {/* so we start with an input and a button to add your tasks */}
      <input type='text' ref={inputRef} />
      <button onClick={AddTask}> Add task </button>
      <ul>
        { toDos.map(({text, finished},index)=> (
          <li key={index} onClick={()=>itemDone(index)} className={finished ? "done" : ""}>{text}</li>
        ))}

      </ul>


    </div>
  );
}

export default App;
