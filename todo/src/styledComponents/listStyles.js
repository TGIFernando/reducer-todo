import styled from 'styled-components'

export const MainDiv = styled.div`
.completed{
    text-decoration: line-through;
    opacity:50%;
}
display:flex;
justify-content: space-around;
flex-wrap: wrap;
`

export const Ptag = styled.p`
margin:1rem;
background-color:#5F1A37;
color: #73C2BE;
font-size: 2rem;
width: 50rem;
border: 2rem solid #5F1A37;
display:flex;
justify-content:center;
align-items: center;
&:hover{
    cursor: pointer;
    opacity: 50%;
    transition:.5s;
}
`