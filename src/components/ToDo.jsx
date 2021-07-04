import React from 'react'

function ToDo({ value, inputText, setInputText }) {

    const deleteHandler = () => {
        setInputText(inputText.filter(el =>
            el.id !== value.id
        ))

        console.log(value);
    }

    const completeHandler = () => {
        setInputText(inputText.map(item => {
            if (item.id === value.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }));
    }

    return (
        <div className='todo' >
            <li className={`todo-item ${value.completed ? 'completed' : ''} `}>{value.text}  </li>
            <button className='complete-btn' onClick={completeHandler} > <i className='fas fa-check'></i> </button>
            <button className='trash-btn' onClick={deleteHandler} > <i className='fas fa-trash'></i> </button>
        </div>
    )
}

export default ToDo
