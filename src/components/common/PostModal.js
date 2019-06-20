import React from 'react';

import styled, { keyframes } from 'styled-components';

import exitIcon from '../../assest/icon/exit.png';


const intro = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
  }
`

const outro = keyframes`
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
}
`

const ModalWrapper = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 30000;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(23, 23, 23, 0.53);
`

const Modal = styled.div`
    z-index: 50000;
    width: 50rem;
    height: 37.5rem;
    box-shadow: 0 0.1875rem 0.625rem 0 rgba(105, 124, 78, 0.61);
    border-radius: 0.625rem;
    box-sizing: border-box;
    animation-duration: 0.5s;
    animation-fill-mode: both;
    animation-name: ${props => props.postState ? intro : outro};
`

const ModalHeaderWrapper = styled.div`
    z-index: 60000;
    height: 3.53125rem;
    width: 100%;
    background-color: #ffffff;
    border-top-left-radius: 0.625rem;
    border-top-right-radius: 0.625rem;
    box-shadow: 0 0.1875rem 0.625rem 0 rgba(225, 225, 225, 0.61);
    border-bottom: solid 0.085rem #e1e1e1;
    box-sizing: border-box;
    padding-left: 4.9375rem;
    padding-right: 1.9625rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    `

const ModalHeaderTitle = styled.span`
    font-family: 'NanumGothic';
    font-size: 1.375rem;
    font-weight: 800;
    color: #707070;
`

const ModalHeaderEnd = styled.div`
    background-image: url(${exitIcon});
    height: 0.975rem;
    width: 0.975rem;
    background-size: cover;
    background-repeat: no-repeat;
`

const ModalContentWrapper = styled.div`
    z-index: 50000;
    height: 33.96875rem;
    width: 100%;
    background-color: #ffffff;
    border-bottom-left-radius: 0.625rem;
    border-bottom-right-radius: 0.625rem;
    box-sizing: border-box;
    padding-top: 2.09375rem;
    padding-left: 3.75rem;
`

const ModalContentButtonWrapper = styled.div`
    width: 17.25rem;
    height: 3.25rem;
    box-sizing: border-box;
    border: solid 0.0625rem #e1e1e1;
    display: flex;
    border-radius: 0.625rem;
`

const ModalContentButton = styled.div`
    width: 8.625rem;
    height: 3.25rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #697c4e;
    font-size: 1.25rem;
    font-family: 'NanumGothic';
    position: relative;
    cursor: pointer;
    transition: all 0.7s;
    font-weight: 800;

    &:hover {
        background-color: #EEEEEE;
    }
    
    &:first-child {
        border-right: solid 0.0625rem #e1e1e1;
    }
}
`

const ModalContentButtonBorder = styled.div`
    position: absolute;
    top: -0.0625rem;
    width: 100%;
    height: 0.425rem;
    background-color: #697c4e;
    box-sizing: border-box;

    ${props => props.curState === "notice" && 
        `
        border-top-left-radius: 0.625rem;

        &.post {
            display: none;
        }
        `
    }

    ${props => props.curState === "post" && 
        `
        border-top-right-radius: 0.625rem;

        &.notice {
            display: none;
        }
        `
    }
`

const PostModal = ({component, postState, content, onHandleClick, curState, onHandleState}) => {
    return (
        <ModalWrapper onClick = {() => {
                postState &&
                onHandleClick()
                }}>
            <Modal postState = {postState} onClick = {e => e.stopPropagation()}>
                <ModalHeaderWrapper>
                    <ModalHeaderTitle>
                        제보하기
                    </ModalHeaderTitle>
                    <ModalHeaderEnd onClick = {onHandleClick} />
                </ModalHeaderWrapper>
                <ModalContentWrapper>
                    <ModalContentButtonWrapper>
                        <ModalContentButton onClick = {() => onHandleState('notice')}>
                            <ModalContentButtonBorder className = "notice" curState = {curState}/>
                            필수 공지
                        </ModalContentButton>
                        <ModalContentButton onClick = {() => onHandleState('post')}>
                            <ModalContentButtonBorder className = "post" curState = {curState}/>
                            제보하기
                        </ModalContentButton>
                    </ModalContentButtonWrapper>
                    {component}
                </ModalContentWrapper>
            </Modal>
        </ModalWrapper>
    );
};

export default PostModal;