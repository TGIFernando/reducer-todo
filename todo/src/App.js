import React, { useEffect, useState, useReducer} from 'react'
import './App.css';
import { reducer, initailState } from './reducers/reducer'
import Form from './components/form'
import List from './components/List'

function App() {

  const [value, setValue] = useState("")
  const [state, dispatch] = useReducer(reducer, initailState)

  function toggleComplete(e){
    for (let i in state){
      if (state[i].item === e.target.textContent){
        dispatch({type: 'TOGGLE_COMPLETED', payload: i})
      }
      console.log(state[i])
    }
  }

  function addTodo(title){
    dispatch({type: 'ADD_TODO', payload: title})
    setValue('')
  }

  function clear (){
    dispatch({type: 'CLEAR_COMPLETED'})
  }

  useEffect(()=>{
    console.log(state)
    console.log(value)
  },[state, value])


  return (
    <div className="App">
      <Form value={value} setValue={setValue} add={addTodo} clear={clear}/>
      <List toggle={toggleComplete} state={state}/>
    </div>
  );
}

export default App;
