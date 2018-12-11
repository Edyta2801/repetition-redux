import {createStore}from 'redux'


//reducer wywołuje akcję INIT
const reducer=()=>({
    name:'Ala'
})

export const store =createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
