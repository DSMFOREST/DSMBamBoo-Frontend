import React, { Component } from 'react'

import Header from '../../components/common/Header'

class HeaderContainer extends Component {
    
    state = {
        loginToggle: false
    }

    shouldComponentUpdate(nextProps) {
        return false
    }

    LoginSwitch = () => {
        this.setState({
            loginToggle: true
        });
        console.log(this.state.loginToggle);
    }

    render() {
        return (
            <Header LoginSwitch={this.LoginSwitch}/>
        )
    }
}

export default HeaderContainer;