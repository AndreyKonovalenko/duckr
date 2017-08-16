import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { container, innerContainer } from './styles.css'
import HomeContainer from '../Home/HomeContainer'

class Root extends React.Component {
    render () {
        return (
            <div className={container}>
                <div className={innerContainer}>
                    <Router>
                        <Route path='/' component={HomeContainer}/>
                    </Router>
                </div>
            </div>
        )
    }
}

export default Root
