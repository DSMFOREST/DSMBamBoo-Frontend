import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import LoginModal from '../../components/common/LoginModal';
import LoginModalAction from '../../action/LoginModalAction';

class LoginModalContainer extends Component {
    state = {
        adminId: '',
        password: '',
        wrong: false
    }

    LoginSwitchoff = () => {
        this.props.toggleSwitch('off')
        this.setState({
            adminId: '',
            password: '',
            wrong : false
        })
    }

    Login = async () => {
        if (this.state.adminId === '') {
            this.setState({
                wrong : true
            })
        }
        else if (this.state.password === '') {
            this.setState({
                wrong : true
            })
        }
        else {
            try {
                const response = await axios.post('http://dsmbamboo.com:8080/api/signin', {
                    adminId : this.state.adminId, password : this.state.password
                })
                sessionStorage.setItem('JWT', response.data.data.accessToken)
                alert('로그인 되었습니다.')
                this.props.toggleSwitch('off')
            }
            catch(err) {
                this.setState({
                    wrong : true
                })
                console.log(err)
            }
        }
        this.setState({
            adminId: '',
            password: ''
        })
    }

    enterkey = () => {
        if(window.event.keyCode === 13){
            this.Login();
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
        console.log(e.target.name)
    }

    render() {
        return (
            <LoginModal id={this.state.adminId} password={this.state.password} loginToggle={this.props.toggle} onHandleClick={this.LoginSwitchoff} wrong={this.state.wrong} onButtonClick={this.Login} pressenter={this.enterkey} handleChange={this.handleChange}></LoginModal>
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