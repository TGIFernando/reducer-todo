import React, { useState, useReducer} from 'react'

export const reducer = (state, action) => {
    let newState = []
    switch(action.type){

        case "ADD_TODO":
            newState = [... state,{
                item: action.payload,
                completed: false,
                id: Date.now()
            }]
            return newState

        case "TOGGLE_COMPLETED":
            let index = Number(action.payload)
            newState = [... state]
            newState[index] = {... newState[index], completed: !newState[index].completed}
            console.log(newState[index])
            return newState

        case "CLEAR_COMPLETED":
            for (let i in state) {
                if (!state[i].completed){
                    newState.push(state[i])
                }
            }
            return newState
    
        default:
            return state
    }
}
export const initailState = [{
    item: "Initail State",
    completed: false,
    id: Date.now()
}]