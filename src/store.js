import { createStore } from 'redux'


const INITIAL_STATE = {
    firstAction: false
}

//reducer wywołuje akcję INIT

const reducer = (state = INITIAL_STATE, action) => {
    if (action.typ === 'FIRST_ACTION') {
        return {
            ...state,
            firstAction: true
        }
    } return state//by default returns prev state
}


const FIRST_ACTION='FIRST_ACTION'
const firstAction=()=>({
    type: 'FIRST_ACTION'
})

window.dispatchFirstAction=()=>store.dispatch(firstAction())




export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


