import React from 'react'

export default function List (props) {
    return(
        <div>
            {props.state.map((items, index) => {
                return <p key={index} className={items.completed ? 'completed' : ''} onClick={props.toggle}>{items.item}</p>
            })}
        </div>
    )
}