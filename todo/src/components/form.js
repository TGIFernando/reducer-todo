import React from 'react'
import * as sty from '../styledComponents/formStyles'

export default function Form(props){
    const onChange = e => {
        props.setValue(e.target.value)
    }

    return(
        <sty.MainDiv>
            <sty.TextInput placeholder='Write Something To Do' type='text' name='title' onChange={onChange} value = {props.value}/>
            <sty.Button onClick={()=>props.add(props.value)}>Add To Do</sty.Button>
            <sty.Button onClick={()=>props.clear()}>Clear Completed</sty.Button>
        </sty.MainDiv>
    )
}