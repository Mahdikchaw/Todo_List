import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);
  const [counter, setCounter] = useState(0);
  const inputRef = useRef();
  const AddTask = () => { 
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
    setCounter((prevCounter)=> prevCounter+1);
  } ;

  return (
    <div className="App">
      {/* so we start with an input and a button to add your tasks */}
      <div className='container'>

          <div className='headerOfTheList'>
            <input className='enterText' placeholder='TO DO ...' type='text' ref={inputRef} />
            <button className='button' onClick={AddTask}> Add Task </button>
          </div>

          <div className='listOfTasks'>
            <ul>
              { toDos.map(({text, finished},index)=> (
                <li key={index} onClick={()=>itemDone(index)} className={finished ? "done" : "itemNotDone"}>{text}</li>
              ))}

            </ul>
          </div>
          <div className='listFooter'>
            <p>Completed {counter} of {toDos.length}</p>
          </div>

      </div>
     

    </div>
  );
}

export default App;
