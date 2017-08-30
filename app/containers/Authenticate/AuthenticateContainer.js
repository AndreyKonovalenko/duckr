import React from 'react'
import PropTypes from 'prop-types'
import Authenticate from '../../components/Authenticate/Authenticate'
//import { bindActionCreators } from 'redux'
import auth from '../../helpers/auth'
import { connect } from 'react-redux'
import * as userActionCreators from '../../redux/modules/users'

class AuthenticateContainer extends React.Component {
    constructor(props) {
        super(props)
        this.handleAuth = this.handleAuth.bind(this)
    }
    handleAuth () {
        this.props.dispatch(userActionCreators.fetchingUser())
        auth().then((user) => {
            this.props.dispatch(userActionCreators.fetchingUserSuccess(user.uid, user, Date.now()))
            this.props.dispatch(userActionCreators.authUser(user.uid))
            console.log('Authed user', user)
        }).catch((error) => this.props.dispatch(userActionCreators.fetchingUserFailure(error)))
    }
    render () {
        return (
            <Authenticate
                isFetching={this.props.isFetching}
                error={this.props.error}
                onAuth={this.handleAuth} />
        )
    }
}

AuthenticateContainer.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired
}

function mapStateToProps (state) {
    console.log('STATE', state)
    return {
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps)(AuthenticateContainer)

/*export default connect(
    (state) => ({isFetching: state.isFetching, error: state.error}),
    (dispatch) => bindActionCreators(userActionCreators, dispatch),
)(AuthenticateContainer)*/
