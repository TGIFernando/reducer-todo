import React from 'react'
import * as sty from '../styledComponents/listStyles'



export default function List (props) {
    return(
        <sty.MainDiv>
            {props.state.map((items, index) => {
                return <sty.Ptag key={index} className={items.completed ? 'completed' : ''} onClick={props.toggleComplete}>{items.item}</sty.Ptag>
            })}
        </sty.MainDiv>
    )
}