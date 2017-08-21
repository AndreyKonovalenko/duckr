import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import {container, navContainer, link} from './styles.css'

const NavLinks = ({isAuthed}) => {
    return isAuthed === true
        ? <ul>
            <li><NavLink className={link} to='/'>{'Home'}</NavLink></li>
        </ul>
        : null
}

const ActionLinks = ({isAuthed}) => {
    return isAuthed === true
        ? <ul>
            <li className={link}>{'NEW DUCK'}</li>
            <li><NavLink className={link} to='/logout'>{'Logout'}</NavLink></li>
        </ul>
        : <ul>
            <li><NavLink className={link} to='/home'>{'Home'}</NavLink></li>
            <li><NavLink className={link} to='/auth'>{'Authenticate'}</NavLink></li>
        </ul>
}

const Navigation = ({isAuthed}) => {
    return (
        <div className={container}>
            <nav className={navContainer}>
                <NavLinks isAuthed={isAuthed}/>
                <ActionLinks isAuthed={isAuthed}/>
            </nav>
        </div>
    )
}

Navigation.propTypes = NavLinks.propTypes = ActionLinks.propTypes = {
    isAuthed: PropTypes.bool.isRequired
}

export default Navigation
