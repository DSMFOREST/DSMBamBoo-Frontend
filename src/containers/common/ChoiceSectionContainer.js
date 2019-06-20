import React, { Component } from 'react'

import ChoiceSection from '../../components/common/ChoiceSection'

import { connect } from 'react-redux';

import ChoiceSectionAction from '../../action/ChoiceSectionAction'

import ChoiceSectionButtonComponent from '../../components/common/ChoiceSectionButtonComponent'

class ChoiceSectionContainer extends Component {
    button = [
        { section : '공지사항', key : 1},
        { section : '대나무숲', key : 2},
        { section : '제보하기', key : 3}
    ]

    shouldComponentUpdate(nextProps) {
        if(nextProps.section === this.props.section) return false
        else return true
    }

    render() {
        const choiceButtons = this.button.map(data => (
            <ChoiceSectionButtonComponent key = {data.key} onHandleClick = {() => {
                console.log(data.section)
                this.props.choiceSection(data.section)
            }} data = {data}/>
        ))

        return (
            <ChoiceSection section = {this.props.section} choiceButtons = {choiceButtons} />
        )
    }
}

const mapStateToProps = (state) => ({
    section: state.choiceSection.section
})

const mapDispatchToProps = (dispatch) => ({
    choiceSection: (val) => dispatch(ChoiceSectionAction(val))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceSectionContainer);