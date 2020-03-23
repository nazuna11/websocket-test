import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

import Messages from './containers/Messages'
import reducer from './reducers'
// import registerServiceWorker from './registerServiceWorker'


export const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware),
)

ReactDOM.render(
  <Provider store={store}>
    <Messages />
  </Provider>,
  document.getElementById('root')
)

// registerServiceWorker()
