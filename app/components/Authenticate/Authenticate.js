import React from 'react'
import PropTypes from 'prop-types'
import FacebookAuthButton from '../FacebookAuthButoon/FacebookAuthButton'
import { centeredContainer, largeHeader, errorMsg } from './../../sharedStyles/styles.css'

const Authenticate = ({error, isFetching, onAuth}) => {
    return (
        <div className={centeredContainer}>
            <h1 className={largeHeader}>{'Authenticate'}</h1>
            <FacebookAuthButton isFetching={isFetching} onAuth={onAuth}/>
            {error ? <p className={errorMsg}>{error}</p> : null}
        </div>
    )
}

export default Authenticate

Authenticate.propTypes = {
    error: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    onAuth: PropTypes.func.isRequired
}
