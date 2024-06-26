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

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      AddTask();
    }
  };
  const transformDescription = (event,index) =>{
    if (event.key === "Enter"){ 
      const newToDos = [...toDos];
      newToDos[index].description = event.target.value;
      setToDos(newToDos);
    }
  };

  const itemDone = (index) => { 
    const newToDos = [...toDos];
    newToDos[index].finished = !newToDos[index].finished; 
    setToDos(newToDos);
    if (newToDos[index].finished === true){
      setCounter((prevCounter)=> prevCounter+1);
    } 
    else { 
      setCounter((prevCounter)=> prevCounter-1);
    }
    
  } ;

  const returnFunction = (index) =>{ 
    return itemDone(index);
  }

  return (
    <div className="App">
      {/* so we start with an input and a button to add your tasks */}
      <div className='container'>

          <div className='headerOfTheList'>
            <input className='enterText' placeholder='To do ...' type='text' ref={inputRef} onKeyDown={handleKeyPress} />
            {/* <button className='button' onClick={AddTask}> Add Task </button> */}
          </div>

          <div className='listOfTasks'>
            <ul>
              { toDos.map(({text, finished,description},index)=> (
                <div key={index}>
                    <div className='task'>
                      <div className='circleContainer'>
                        <div className='circle' onClick={()=>returnFunction(index)}></div>
                      </div>
                      <li key={index} onClick={()=>itemDone(index)} className={finished ? "done" : "itemNotDone"}>{text}</li>                       
                    </div>              
                    
                      {description ? (
                          <p>{description}</p> ) : (               
                          <input 
                            className='description' 
                            placeholder='Add your description' 
                            onKeyDown={(e) => transformDescription(e, index)} 
                          />
                       )}
                     {/* <input className='description' placeholder='add you description' onKeyDown={transformDescription} /> */}
                </div>
             
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
