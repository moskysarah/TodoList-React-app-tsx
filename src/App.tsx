
import './App.css'
import { useState } from 'react'

function TodoList () {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

function handleChange(e){
  setInputValue(e.target.value)
}

function handleSubmit(e){
  e.preventDefault()
  setTodos([...todos, inputValue])
  setInputValue('')
}

const handleDelete = (index) => {
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos);
};
  return (
    <div className='first-container'>
      <h1>Liste de taches</h1>
      <form>
        <div className='container-input'>
          <input type='text' className='input' value={inputValue} onChange={handleChange}/>
        </div>
      </form>
      <div>
          <button  className='button-add'  onClick={handleSubmit}>Ajouter une tache</button>
        </div>


      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}
           <button  className='button-delete'  onClick={handleDelete}>Suprimer</button>
          </li>
        ))}
      </ul>
    </div>

  )
}

export default TodoList