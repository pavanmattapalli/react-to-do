import React, { useState } from 'react'

const TodoItem = (props) => {
    const {todo, handleDelete, handleEditTodo}= props
    const [editText, setEditText]=useState("");
    const [editId, setEditId]= useState(null);

   const  handleEdit=(id,title)=>{
      setEditText(title);
      setEditId(id);
    }
    const handleInputChange=(event)=>{
      setEditText(event.target.value);
    }

    const handleSave=(id)=>{
      handleEditTodo(id, editText);
      alert(`saved: ${editText}`);
      setEditId(null);
      setEditText("");
    }
    
  return (
    <>
    {todo.map(function(element,index){
        return <div key={element.id}>

        {editId ===element.id ?
          <>
          <input type="text" value={editText} onChange={handleInputChange}/>
          <button onClick={()=>handleSave(element.id)}>Save</button>
          </>
       :
       <>
        <li key={element.id}>{element.title}</li>
        <button onClick={()=>handleEdit(element.id,element.title)}>Edit</button>
        <button onClick={()=>handleDelete(element.id)}>Delete</button>
        </>}
        </div>
    })}
    </>
  )
}

export default TodoItem