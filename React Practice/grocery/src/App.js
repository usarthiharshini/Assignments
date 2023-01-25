import { useState } from 'react';
import  './App.css';
import AddItem from './Components/AddItem';
import Items from './Components/Items';
import ResponsiveAppBar from './Components/Navbar';
function App() {
  const [tasks,setTasks] = useState([])
  const handleAdd = (task)=>{
    setTasks([...tasks,task]);
  }
 
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <div className='box'>
     <AddItem add={handleAdd}/>
     <Items tasks={tasks}  /> 
     </div>
    </div>
  );
}

export default App;
