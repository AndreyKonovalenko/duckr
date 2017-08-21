import React from 'react'
import Authenticate from '../../components/Authenticate/Authenticate'
import auth from '../../helpers/auth'

class AuthenticateContainer extends React.Component {
    handleAuth () {
        auth().then((user) => {
            console.log('Authed user', user)
        })
    }
    render () {
        return (
            <Authenticate
                isFetching={false}
                error=''
                onAuth={this.handleAuth} />
        )
    }
}

export default AuthenticateContainer
