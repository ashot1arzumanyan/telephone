import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
// import io from 'socket.io-client'

import reducers from './reducers'

import initSocket from './socket'

const ws = new WebSocket('ws://localhost:8000')

const middleware = applyMiddleware(thunk.withExtraArgument(ws), createLogger())

const store = createStore(
  reducers,
  composeWithDevTools(middleware)
)

initSocket(ws, store.dispatch)

export default store