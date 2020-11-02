import React, { useState, useReducer} from 'react'
import './App.css';
import { reducer, initailState } from './reducers/reducer'

function App() {

  const [newTitleText, setNewTitleText] = useState("")
  const [state, dispatch] = useReducer(reducer, initailState)
  const onChange = e => {
    setNewTitleText(e.target.value)
  }
  console.log(state)

  return (
    <div className="App">
      <h1>{state.item}</h1>
    </div>
  );
}

export default App;
