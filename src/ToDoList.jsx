import React from 'react'
import { useState } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { LuMoveUp } from "react-icons/lu";
import { LuMoveDown } from "react-icons/lu";


const ToDoList = () => {

    const [tasks,setTasks]=useState(["eat banana","water plants"]);
    const [newTask,setNewTask]=useState("");


    const handleChange=(event)=>{
    setNewTask(event.target.value)
    }

    const addTask=()=>{
        if(newTask.trim()!==""){
setTasks(t=>[...t,newTask])
setNewTask("");
        }
    }

    const DeleteTask=(index)=>{
const updatedTasks=tasks.filter((_,i)=> i!==index )
setTasks(updatedTasks)
    }


    const moveTaskUp=()=>{
        
    }

    const moveTaskDown=()=>{

    }

  return (
    <div className='to-do-list'>
      <h2>To-do App</h2>
      <input type="text" 
      className='new-task-input'
      placeholder='Enter a new task'
      value={newTask}
      onChange={handleChange}/>
      <button className='Add-button'
      onClick={addTask}>
Add <IoIosAddCircle />
      </button>


      <ol>
        {tasks.map((task,index)=>{
            return(
            <li key={index}>
                <span className='task-text'>{task} </span>
                <button className='del-task-button' 
                onClick={()=>DeleteTask(index)}>
Delete <MdDeleteForever />
                </button>
                <button className='MoveUp-task-button' 
                onClick={()=>moveTaskUp(index)}>
Move up<LuMoveUp />
                </button>
                <button className='MoveDown-task-button' 
                onClick={()=>moveTaskDown(index)}>
Move down<LuMoveDown />
                </button>
            </li>
        )})}
      </ol>
    
    </div>
  )
}

export default ToDoList
