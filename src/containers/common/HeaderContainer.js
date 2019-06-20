import React, { Component } from 'react'

import Header from '../../components/common/Header'

class HeaderContainer extends Component {

    shouldComponentUpdate(nextProps) {
        return false
    }

    render() {
        return (
            <Header />
        )
    }
}

export default HeaderContainer;