import React, { useState, useReducer } from 'react'
import './App.css';
import { reducer, initailState } from './reducers/reducer'
import Form from './components/form'
import List from './components/List'
import { toggle, add, clear} from './components/reducerNames'

function App() {

  const [value, setValue] = useState("")
  const [state, dispatch] = useReducer(reducer, initailState)

  function toggleComplete(e){
    for (let i in state){
      if (state[i].item === e.target.textContent){
        dispatch({type: toggle, payload: i})
      }
    }
  }

  function addTodo(title){
    dispatch({type: add, payload: title})
    setValue('')
  }

  function clearCompleted (){
    dispatch({type: clear})
  }

  return (
    <div className="App">
      <Form value={value} setValue={setValue} add={addTodo} clear={clearCompleted}/>
        <List toggleComplete={toggleComplete} state={state}/>
    </div>
  );
}

export default App;
