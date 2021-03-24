import { applyMiddleware, createStore, compose } from 'redux'
import reduxLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootSaga from '@/sagas'
import reducer from '@/reducer'

let store: any = null

const sagaMiddleware = createSagaMiddleware()

const createDevelopmentStore = () => {
  return createStore(
    reducer, composeWithDevTools(
      applyMiddleware(sagaMiddleware, reduxLogger),
    ),
  )
}

const createProductionStore = () => {
  return createStore(
    reducer, compose(
      applyMiddleware(sagaMiddleware),
    ),
  )
}

export const getStore = () => {
  if (!store) {
    store = process.env.NODE_ENV === 'development'
      ? createDevelopmentStore()
      : createProductionStore()

    sagaMiddleware.run(rootSaga)
  }

  return store
}