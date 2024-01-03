import { useState } from 'react';
import './App.css';
import Add from './Pages/add';
import Edit from './Pages/edit';
import Header from './Pages/header';
import Plus from './Pages/plus';
import { Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [todo, settodo] = useState([]);
  const [valid, setValid] = useState(true);
  const [btn, setBtn] = useState(true);


  const unique_id = uuidv4();
  const small_id = unique_id.slice(0, 8); //generate small id


  const isValid = title.length || message.length < 0;

  const handleSubmit = (event) => {
    event.preventDefault();
    
    isValid ?
      settodo([...todo, { id: small_id, Title: title, Message: message }])
      : console.log('submit');

    setTitle('');
    setMessage('');
    setValid(false);
  }

  const handleChange = (e) => {
    setTitle(e.target.value);
  }
  const handleChangeM = (e) => {
    setMessage(e.target.value);
  }

//Edit and save again
 const editTodo = (id) => {
  setValid(true);
  setBtn(false);
  const selectedTodo = todo.find(todo => todo.id === id);
  console.log(selectedTodo);
  setTitle(selectedTodo.Title);
  setMessage(selectedTodo.Message);
}

const updateTodo = () => {
  settodo([...todo, { id: small_id, Title: title, Message: message }])
  setTitle('');
  setMessage('');
  setValid(false);
  //console.log('error', id);
  // const updatedTodo = { ...todo.find((todo) => todo.id === id), Title: title, Message: message };
  // const updatedTodos = todo.map((todo) => (todo.id === id ? updatedTodo : todo));
  // setTodo(updatedTodos);
};

  return (
    <div className="App">
      <div className='mainpage'>
        <div className="col-md-3"></div>
        <div className="col-md-4">
          <Header setValid={setValid}/>
          <Routes>
            <Route path="/" element={<Add />} />
            <Route path="/edit" element={<Edit btn={btn} editTodo={editTodo} valid={valid} todo={todo} handleSubmit={handleSubmit} handleChange={handleChange} handleChangeM={handleChangeM} title={title} message={message} />} />
          </Routes>
        </div>
        <div className="col-md-3">
        </div>
      </div>
      <Plus setValid={setValid} />
    </div>
  );
}

export default App;
