import React,{useRef} from 'react'

function Form({setInputText , inputText , setStatus}) {

    const InputRef = useRef('');
    
    const submitHandler = (e) => {
        e.preventDefault();
    
        setInputText([
            ...inputText,
            {text: InputRef.current.value , completed: false, id: Math.random() * 1000 }
        ])

        InputRef.current.value = "";
    }

    const statusChangeHandler =(e) =>{
        setStatus(e.target.value);
    }

    return (
        <React.Fragment>
            <form>
                <input type="text" className="todo-input" ref={InputRef} />
                <button onClick={submitHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo" onChange={statusChangeHandler} >
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </React.Fragment>
    )
}

export default Form
