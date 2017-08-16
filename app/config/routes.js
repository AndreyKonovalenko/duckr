import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainContainer from '../containers/Main/MainContainer'

const routes = (
    <Router>
        <Route path='/' component={MainContainer}/>
    </Router>
)

export default routes
