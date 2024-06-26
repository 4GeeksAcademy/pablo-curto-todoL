import React, { useState } from "react";

const Fila = () =>{
    const [tarea, setTarea] = useState("");
    const [todos, setTodos] = useState([]);

    return (
    <>
		<h1>Mis Tareas</h1>
		<div className="container">
			<ul>
                <input type="text" placeholder="¿Qué tengo pendiente?" 
                onChange={(e) => setTarea(e.target.value)} value={tarea} 
                onKeyDown={(e)=> {if (e.key === "Enter") if((tarea.trim().length >= 3)){setTodos([...todos, tarea]); setTarea("");}else return alert("error")}}/>

				{todos.map((t, index)=>(
                    <li key={index}>
                        {t} <i className="borrar" onClick={()=> setTodos(todos.filter((t,currentIndex)=> index !=currentIndex))}><strong>X</strong></i>
                    </li>
                ))}
			</ul>
			<div className="counter">{todos.length} tareas</div>
            <div className="pag1"></div>
            <div className="pag2"></div>
		</div>
		</>
    )
}

export default Fila