import React,{useState, useEffect} from 'react'
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [inputText , setInputText] = useState([]);
  const [status , setStatus] = useState('all');
  const[filteredTodos , setFilteredTodos] = useState([]);

  const saveToLocal = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos',JSON.stringify([]))
    }
    else{
      localStorage.setItem('todos',JSON.stringify(inputText))
    }
  }

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') != ""){
      setInputText(JSON.parse(localStorage.getItem('todos')))
    }
  }

  useEffect(() => {
    getLocalTodos()
  },[]);

  useEffect(() => {
    switch(status){
      case 'completed':
        setFilteredTodos(
          inputText.filter(el => el.completed === true )
        )
      break;
      case 'uncompleted':
        setFilteredTodos(
          inputText.filter(el => el.completed === false )
        )
      break;
      default:
        setFilteredTodos(inputText)
      break;
    }
    saveToLocal();
  }, [inputText,status])

  return (
    <div className="App">
      <header>
        <h1>Ed's Todo List </h1>
      </header>
      <Form inputText={inputText}  setInputText={setInputText} setStatus={setStatus} />
      <TodoList inputText={inputText} setInputText={setInputText} status={status} filteredTodos={filteredTodos}  />
    </div>
  );
}

export default App;
