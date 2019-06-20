import React, { Component } from 'react';

import { connect } from 'react-redux';

const withDelayUnmount = (delay) => (WrappedComponent) => {
    return class extends Component {

        state = {
            render : this.props.post
        }

        componentDidUpdate = (prevProps) => {
            if(!this.props.render && prevProps.post)
                setTimeout(() => {
                    this.setState({
                        render : false
                    })
                }, delay)
            else if (!prevProps.post && this.props.post)
                this.setState({
                    render : true
                })
        }

        render() {
            return (
                <>
                    {this.state.render ? <WrappedComponent {...this.props}/> : null}
                </>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    post: state.choiceSection.post
})

export default connect(mapStateToProps)(withDelayUnmount);