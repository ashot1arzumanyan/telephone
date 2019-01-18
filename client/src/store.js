import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSocketMiddleware from 'redux-ws'
// import io from 'socket.io-client'

import reducers from './reducers'

import initSocket from './socket'

const ws = new WebSocket('ws://localhost:8000')

const socketMiddleware = createSocketMiddleware(ws)

const middleware = applyMiddleware(socketMiddleware, createLogger())

const store = createStore(
  reducers,
  composeWithDevTools(middleware)
)

initSocket(ws, store.dispatch)

export default store