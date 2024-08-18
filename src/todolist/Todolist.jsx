import React, { useState } from 'react'
import TodoItem from './TodoItem';

const Todolist = () => {
   const [text, setText]= useState("");
   const [todo, setTodo]= useState([]);

   const handleChange=(event)=>{
    
    setText(event.target.value);
   }

   const handleSubmit=()=>{

    let newItem={
        title:text,
        id: new Date().toDateString() + text
    }

    setTodo([...todo,newItem]);
    
    setText("")
   }

   const handleDelete=(id)=>{
    console.log("clicked delete");
    // console.log(id);
    const todoAfterDeletion=todo.filter(function(element,index){
        return element.id !==id 

    });
    // console.log(todoAfterDeletion);
    setTodo(todoAfterDeletion)
   }


   const handleEditTodo=(id,newItem)=>{
    let updatedTodo= todo.map((element)=>{
        if(element.id===id){
          return {...element,title:newItem}  
        }
        return element;
    });
    setTodo(updatedTodo);
   }
  return (
    <div>
        <input type="text" value={text} onChange={handleChange} placeholder="Enter A To-Do"/>
        <button onClick={handleSubmit}>Submit</button>
        <ol>
            <TodoItem todo={todo} handleDelete={handleDelete} 
            handleEditTodo={handleEditTodo}/>
        </ol>
      
    </div>
  )
}

export default Todolist