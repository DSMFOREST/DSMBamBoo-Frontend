import React, { Component } from 'react';

import { connect } from 'react-redux';

import ChoiceSectionAction from '../../action/ChoiceSectionAction'

import PostModal from '../../components/common/PostModal'

import PostModalNotice from '../../components/common/PostModalNotice'

import PostModalSubmit from '../../components/common/PostModalSubmit';

class PostModalContainer extends Component {
    state = {
        edit : 'notice',
        mount : this.props.post,
        degree : Math.floor(Math.random() * 9) * 40,
        captcha : false,
        captchaCount : 3,
    }

    HandleClick = (state) => {
        this.setState({
            edit : state,
        })
    }

    HandleCheckVerifyCaptcha = () => {
        if(Math.abs(this.state.degree) % 360 === 0) {
            this.setState(prevState => ({
                    captcha : true,
                    captchaCount : prevState.captchaCount - 1
                })
            )
        }
        else if(this.state.captcha === false){
            this.setState(prevState => {
                    let captchaCount = prevState.captchaCount - 1;
                    if(captchaCount === 0) {
                        this.props.choiceSection()
                    }
                    return {
                        captchaCount : captchaCount
                    }
                }
            )
        }
    }

    HandleRightArrow = () => {
        this.setState(prevState => ({
                degree: prevState.degree + 40
            })
        )
    }

    HandleLeftArrow = () => {
        this.setState(prevState => ({
                degree: prevState.degree - 40
            })
        )
    }

    componentDidUpdate(prevProps) {
        if(prevProps.post && !this.props.post) {
            setTimeout(() => {
                this.setState({
                    edit : 'notice',
                    mount : false,
                    degree : Math.floor(Math.random() * 9) * 40,
                    captcha : false,
                    captchaCount : 3
                })
            }, 300)
        }
        else if(!prevProps.post && this.props.post) {
            this.setState({
                mount : true
            })
        }
    }

    render() {
        const { edit, mount, degree, captchaCount, captcha } = this.state;
        let detailComponent;
        switch(edit) {
            case "notice":
                 detailComponent = <PostModalNotice captchaCount = {captchaCount} captcha = {captcha} onHandleVerifyCaptcha = {this.HandleCheckVerifyCaptcha} onHandleLeft = {this.HandleLeftArrow} onHandleRight = {this.HandleRightArrow} degree = {degree}/>
                break;
            case "post":
                detailComponent =  <PostModalSubmit captcha = {captcha}/>
                break;
            default:
                detailComponent = null
        }

        return (
            <>
                { this.state.mount && <PostModal onHandleState = {this.HandleClick} component = {detailComponent} mountState = {mount} postState = {this.props.post} onHandleClick = {this.props.choiceSection} curState = {edit}/> }
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    post: state.choiceSection.post
})

const mapDispatchToProps = (dispatch) => ({
    choiceSection: () => dispatch(ChoiceSectionAction('exit'))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostModalContainer);