import React from 'react'
import {Route} from 'react-router-dom'
import { container, innerContainer } from './styles.css'
import HomeContainer from '../Home/HomeContainer'

class MainContainer extends React.Component {
    render () {
        return (
            <div className={container}>
                <div className={innerContainer}>
                    <Route path='/' component={HomeContainer}/>
                </div>
            </div>
        )
    }
}

export default MainContainer
