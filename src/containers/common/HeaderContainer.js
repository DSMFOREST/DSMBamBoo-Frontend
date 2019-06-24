import React, { Component } from 'react'

import { connect } from 'react-redux';

import Header from '../../components/common/Header'
import LoginModalAction from '../../action/LoginModalAction';

class HeaderContainer extends Component {
    shouldComponentUpdate(nextProps) {
        return false
    }

    LoginSwitchon = () => {
        this.props.toggleSwitch('on')
        console.log(this.props.toggle)
    }

    render() {
        return (
            <Header LoginSwitchon={this.LoginSwitchon}/>
        )
    }
}

const mapStateToProps = (state) => ({
    toggle: state.loginToggle.toggle
})

const mapDispatchToProps = (dispatch) => ({
    toggleSwitch: (swit) => dispatch(LoginModalAction(swit))
})

export default connect(mapStateToProps ,mapDispatchToProps)(HeaderContainer);