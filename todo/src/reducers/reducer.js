import React, { useState, useReducer} from 'react'

export const reducer = (state, action) => {
    switch(action.type){
        default:
            return state
    }
}
export const initailState = {
    item: "Initail State",
    completed: false,
    id: new Date() 
}