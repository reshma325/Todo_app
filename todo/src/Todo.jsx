import React, { useState } from 'react'

const Todo = () => {
    const [todo, setTodo] = useState({})
    const change = (event) => {
        setTodo({...todo, [event.target.name]: event.target.value })
    }
    const submit = (event) => {
        event.preventDefault()
        console.log(todo)
    }

    return (
        <div>
            <form onSubmit={submit}>
                <label>Todo</label><br />
                <input onChange={change} type='string' name='todo' />
                <input type='submit' />
            </form>

            <div>{todo?.length ? <div>
                {
                    todo.map((t) =>
                        <div>
                            <h1>{t}</h1>
                        </div>)
                }
            </div> : <div>no Todos</div>

            }

            </div>


        </div>



    )
}

export default Todo