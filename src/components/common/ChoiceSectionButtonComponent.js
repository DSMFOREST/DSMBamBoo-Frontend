import styled from 'styled-components';
import React from 'react'

const ChoiceSectionButton = styled.div`
    flex: 1;
    height: 5.625rem;
    background-color: #3f5036;
    z-index: 10000;
    opacity: 0.7;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.5s ease-out;
    
    &:hover {
        background-color: #363636;
    }

    &:first-child {
        border-top-left-radius: 4rem;
    }

    &:nth-child(2) {
        background-color: #ffffff;
    }

    &:nth-child(2):hover {
        background-color: #DDDDDD;
    }

    &:nth-child(2) span {
        color: #444444;
    }

    &:last-child {
        border-top-right-radius: 4rem;
    }
`

const ChoiceSectionButtonText = styled.span`
    color: #ffffff;
    z-index: 20000;
    font-size: 1.875rem;
    font-family: 'NanumGothic';
    font-weight: bold;
`

const ChoiceSectionButtonComponent = ({data, onHandleClick}) => {
    return (
        <ChoiceSectionButton onClick = {onHandleClick} key = {data.key}>
            <ChoiceSectionButtonText>
                {data.section}
            </ChoiceSectionButtonText>
        </ChoiceSectionButton>
    )
}

export default ChoiceSectionButtonComponent;