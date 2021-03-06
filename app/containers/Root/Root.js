import React from 'react'
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'
import { container, innerContainer } from './styles.css'
import Navigation from '../../components/Navigation/Navigation'
import HomeContainer from '../../components/Home/Home'
import AuthenticateContainer from '../Authenticate/AuthenticateContainer'

const Root = () => {
    return (
        <div className={container}>
            <Router>
                <div>
                    <Navigation isAuthed={false}/>
                    <div className={innerContainer}>
                        <Route exact path='/' component={HomeContainer}/>
                        <Route path='/home' component={HomeContainer}/>
                        <Route path='/auth' component={AuthenticateContainer}/>
                    </div>
                </div>
            </Router>
        </div>
    )
}

export default Root
