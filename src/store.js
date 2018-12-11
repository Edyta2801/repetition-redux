import { createStore, import { createStore, combineReducers } from 'redux'

const FIRST_ACTION = 'FIRST_ACTION'

const firstAction = () => ({
  type: FIRST_ACTION
})

const FA_INITIAL_STATE = {
  firstAction: false
}

const firstActionReducer = (state = FA_INITIAL_STATE, action) => {
  if (action.type === 'FIRST_ACTION') {
    return {
      ...state,
      firstAction: true
    }
  }
  return state // by default returns prev state
}

const INC = 'INC'
const DEC = 'DEC'

const incAction = () => ({
  type: INC
})
const decAction = () => ({
  type: DEC
})

const C_INITIAL_STATE = {
  counter: 0
}

const counterReducer = (state = C_INITIAL_STATE, action) => {
  switch (action.type) {
    case INC:
      return {
        ...state,
        counter: state.counter + 1
      }
    case DEC:
      return {
        ...state,
        counter: state.counter - 1
      }
    default:
      return state
  }
}

const reducer = combineReducers({
  firstActionReducerName: firstActionReducer,
  counterReducerName: counterReducer
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

window.dispatchFirstAction = () => store.dispatch(firstAction())
window.dispatchIncAction = () => store.dispatch(incAction())
window.dispatchDecAction = () => store.dispatch(decAction())