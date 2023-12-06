import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

const Todo = () => {
 

    const [todo, setTodo] = useState('')
    const [list, setList] = useState([])
    const change = (event) => {
        setTodo (event.target.value)
    }
    const submit = (event) => {
        event.preventDefault()
        console.log("Hi", todo, list)
        if(todo.trim()!==""){
            setList([...list, { id: uuidv4(), todo: todo,checked:false }])
            setTodo('')
        }
        
     
 }
 const handleCheckboxChange=(id)=>{
    setList(list.map(check=>check.id===id?{...check,checked:!check.checked}:check))
 }
 const handleDelete=(id)=>{
    setList(list.filter(item=>item.id !==id))
 }

    return (
        <div>
            <form onSubmit={submit}>
                <label>To Do List :</label><br />
                <input onChange={change} type='string' name='todo'value={todo} />
                <input type='submit' />
            </form>
            <div>
                {list?.length ?
                    <ul style={{listStyle:"none"}}>
                        {list.map((l) => (
                            <li key={l.id}><input type='checkbox' checked={l.checked} onChange={()=>handleCheckboxChange(l.id)}/>
                            {l.todo}{l.checked &&
                            (<button onClick={()=>handleDelete(l.id)} style={{marginLeft:"50px"}}>Delete</button>)}
                            </li>
                        ))}
                    </ul>
                    : <div>No Tasks</div>
                }
            </div>

            {/* <div>
                {list?.length ?
                    <div>
                        {
                            <ul>
                                {list.map((l) => (
                                    <li key={l.id}>{l.todo}</li>
                                ))}

                            </ul>
                        }
                    </div> : <div>no Todos</div>

                }

            </div> */}


        </div>



    )
}

export default Todo