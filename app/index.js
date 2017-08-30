import React from 'react'
import ReactDom from 'react-dom'
import Root from './containers/Root/Root'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import users from './redux/modules/users'

const store = createStore(users)
//console.log(store)
//console.log(store.getState())

ReactDom.render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    document.getElementById('app')
)
