import React, { Component } from 'react'

import { connect } from 'react-redux';
import axios from 'axios';

import Header from '../../components/common/Header'
import LoginModalAction from '../../action/LoginModalAction';

class HeaderContainer extends Component {
    state = {
        isLogin: false
    }

    shouldComponentUpdate(nextProps) {
        return false
    }

    LoginSwitchon = () => {
        this.props.toggleSwitch('on')
    }

    IsLogin = async () => {
        try {
            const response = await axios.post('http://dsmbamboo.com:8080/api')
            this.setState({isLogin : true})
        }
        catch(err) {
            console.log(err)
        }
    }

    render() {
        return (
            <Header LoginSwitchon={this.LoginSwitchon} toggle={this.props.toggle}/>
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