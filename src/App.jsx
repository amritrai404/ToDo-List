import { useState } from "react";

const Todolist = () => {
  const [task, setTask] = useState(''); //usestate snippets for variable storing
  const [desc, setDesc] = useState('');
  const [tasks, setTasks] = useState([]);
  
  const handleTasks = (e) => {
    e.preventDefault();
    
    if(!task.trim("") || !desc.trim("")) return;

    const newTask = {
      id: Date.now(), title:task, description:desc
    };

    setTasks([...tasks, newTask]);
    setTask('');
    setDesc("");
  };

  const deleteHandle = (id) => {
    setTasks(tasks.filter(task=>task.id!==id))
  };

  return (
    <div>
    <h1 className="bg-violet-300 text-white p-3 flex justify-center items-center w-screen h-[10vh] sm:h-[16vh] font-bold text-2xl sm:text-3xl md:text-4xl ">
      Amrit's To-Do List
    </h1>

    <form 
          onSubmit={handleTasks}
          className='mt-10 mb-20 flex flex-col md:flex-row md:justify-around'>
      <input type="text" 
             value={task}
             onChange={(e)=>setTask(e.target.value)}
             className='w-[60vw] md:w-[20vw] px-4 py-2 text-xl md:text-2xl border-2 m-2 mt-8 sm:m-5' placeholder='enter your task' 
      
      />

       <input type="text" 
              value={desc}
              onChange={(e)=>setDesc(e.target.value)}
              className='w-[60vw] md:w-[20vw] px-4 py-2 text-xl md:text-2xl border-2 m-2 mt-8 sm:m-5' placeholder='description of task' 
      
      />
      <button className='bg-blue-700 text-xl rounded-md md:text-2xl w-[35vw] md:w-[10vw] px-4 py-2 m-2 mt-8 sm:m-5 text-white'>Add Task</button>
    </form>

    {
      tasks.map((task)=>{
        return(
        <div key={task.id} className="flex flex-row w-[80vw] mx-auto mt-8 justify-between p-2 bg-amber-100 mb-3">
          <h1 className="m-2 text-2xl ">{task.title}</h1>
          <p className="m-2 text-xl">{task.description}</p>
          <button onClick={()=> deleteHandle(task.id)} className="bg-red-800 text-white p-2 text-2xl">Delete</button>
        </div>
        )
      })}   

    </div>
  )
}

export default Todolist;