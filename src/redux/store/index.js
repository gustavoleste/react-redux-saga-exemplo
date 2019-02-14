import "regenerator-runtime/runtime"
import {createStore, applyMiddleware, compose} from 'redux'
import reducer from '../reducer'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import saga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
        reducer,
        applyMiddleware( logger, sagaMiddleware) 
)

sagaMiddleware.run(saga)

export default store
