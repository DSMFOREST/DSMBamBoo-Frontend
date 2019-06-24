import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginModal from '../../components/common/LoginModal';
import LoginModalAction from '../../action/LoginModalAction';

class LoginModalContainer extends Component {
    LoginSwitchoff = () => {
        this.props.toggleSwitch('off')
    }

    render() {
        return (
            <LoginModal loginToggle={this.props.toggle} onHandleClick={this.LoginSwitchoff}></LoginModal>
        );
    };
}

const mapStateToProps = (state) => ({
    toggle: state.loginToggle.toggle
})

const mapDispatchToProps = (dispatch) => ({
    toggleSwitch: (swit) => dispatch(LoginModalAction(swit))
})


export default connect(mapStateToProps, mapDispatchToProps)(LoginModalContainer);