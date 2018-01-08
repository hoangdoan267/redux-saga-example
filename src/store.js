import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import rootSaga from './sagas'
const sagaMiddleware = createSagaMiddleware()

let reducers = combineReducers({
  movies: reducer
})

export default reducers
export const store = createStore(reducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
