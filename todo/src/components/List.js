import React from 'react'
import styled from 'styled-components'

const MainDiv = styled.div`
.completed{
    text-decoration: line-through;
}
`

export default function List (props) {
    return(
        <MainDiv>
            {props.state.map((items, index) => {
                return <p key={index} className={items.completed ? 'completed' : ''} onClick={props.toggleComplete}>{items.item}</p>
            })}
        </MainDiv>
    )
}