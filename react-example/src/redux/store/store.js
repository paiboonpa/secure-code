import { createStore } from 'redux';
import reducers from '../reducers/reducers'

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('store')
    if (serializedState === null) {
      return undefined
    } else {
      return JSON.parse(serializedState)
    }
  } catch (error) {
    return undefined
  }
}

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('store', serializedState)
  } catch (error) {
    console.log(error.message)
  }
}

const persistStore = loadState()

const store = createStore(reducers, persistStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  saveState(store.getState())
})

export default store;