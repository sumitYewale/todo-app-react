import React from 'react'
import ToDo from './ToDo'
function TodoList({inputText , setInputText , status, filteredTodos}) {
    return (
        <React.Fragment>
            <div className="todo-container">
                <ul className="todo-list">
                    {
                        filteredTodos.map(input => {
                            return(
                                <ToDo key={input.id} value={input} inputText={inputText} setInputText={setInputText}  />
                            )
                        })
                    }
                    
                </ul>
            </div>
        </React.Fragment>
    )
}

export default TodoList
