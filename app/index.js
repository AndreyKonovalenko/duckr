import React from 'react'
import ReactDom from 'react-dom'
import Root from './containers/Root/Root'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import users from './redux/modules/users'
import thunk from 'redux-thunk'

const store = createStore(users, applyMiddleware(thunk))
//console.log(store)
//console.log(store.getState())

ReactDom.render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    document.getElementById('app')
)
