import React, { useEffect } from 'react'

export default function Form(props){
    const onChange = e => {
        props.setValue(e.target.value)
    }

    useEffect(()=>{
        console.log('value: ',props.value)
    },[props.value])

    return(
        <div>
            <input  type='text' name='title' onChange={onChange} value = {props.value}/>
            <button onClick={()=>props.add(props.value)}>Add To Do</button>
            <button onClick={()=>props.clear()}>Clear Completed</button>
        </div>
    )
}