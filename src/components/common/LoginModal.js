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
    justify-content: center;
    align-items: center;
    z-index: 30000;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(23, 23, 23, 0.53);
    display: ${props => props.loginToggle ? 'flex' : 'none'};
`

const Modal = styled.div`
    z-index: 50000;
    width: 32.066rem;
    height: 37.5rem;
    box-shadow: 0 0.1875rem 0.625rem 0 rgba(105, 124, 78, 0.61);
    border-radius: 0.625rem;
    box-sizing: border-box;
    animation-duration: 0.5s;
    animation-fill-mode: both;
    animation-name: ${props => props.loginToggle ? intro : outro};
`

const ModalBodyWrapper = styled.div`
    z-index: 60000;
    height: 30.66rem;
    width: 100%;
    background-color: #ffffff;
    border-top-left-radius: 0.625rem;
    border-top-right-radius: 0.625rem;
    box-shadow: 0 0.1875rem 0.625rem 0 rgba(225, 225, 225, 0.61);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ModalTitle = styled.p`
    text-align: center;
    color: #707070;
    font-family: NanumGothic;
    font-weight: bold;
    font-size: 25px
    margin-bottom: 0;
    margin-top: 1.5rem;
`

const ModalSubTitle = styled.p`
    text-align: center;
    color: #707070;
    font-family: NanumGothic;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 4rem;
`

const ModalInputWrapper = styled.div`
    display: flex;
    border-bottom: 1px solid #d8d8d8;
    width: 24.687rem;
    justify-content: space-between;
    margin-top: 1.1rem;
`

const ModalInputBox = styled.input`
    border: 0;
    margin-right: 3rem;
    width: 16rem;
    font-family: Arial;
    font-size: 14px;
`

const ModalInputTitle = styled.p`
    font-family: 'Arial';
    font-weight: bold;
    font-size: 1.2299rem;
    color: #697c4e;
    margin: 1rem;
`
const ModalWorngIDPW = styled.p`
    color: #ff7070;
    font-family: NanumGothic;
    font-size: 10px;
    font-weight: bold;
    margin-left: 13rem;
    display: ${props => props.wrong ? 'block' : 'none'};
`

const ModalHeaderEnd = styled.div`
    background-image: url(${exitIcon});
    height: 1.37rem;
    width: 1.37rem;
    background-size: cover;
    background-repeat: no-repeat;
    margin-left: 28rem;
    margin-top: 1.1rem;
`

const ModalLoginButton = styled.button`
    z-index: 50000;
    height: 4.393rem;
    width: 100%;
    background-color: #697c4e;
    border-bottom-left-radius: 0.625rem;
    border-bottom-right-radius: 0.625rem;
    box-sizing: border-box;
    border: 0;
    cursor: pointer;
    & p {
        font-size: 1.75701rem;
        text-align: center;
        color: #ffffff;
        font-family: 'NanumGothic';
        font-weight: bold;
        margin: 0;
    }
`

const LoginModal = ({id, password, loginToggle, onHandleClick, wrong, onButtonClick, handleChange}) => {
    return (
        <ModalWrapper loginToggle = {loginToggle} onClick = {() => {
            loginToggle &&
            onHandleClick()
            }}>
            <Modal loginToggle = {loginToggle} onClick = {e => e.stopPropagation()}>
                <ModalBodyWrapper>
                    <ModalHeaderEnd onClick = {onHandleClick}></ModalHeaderEnd>
                    <ModalTitle>대나무숲</ModalTitle>
                    <ModalSubTitle>관리자 로그인</ModalSubTitle>
                    <ModalInputWrapper>
                        <ModalInputTitle>ID</ModalInputTitle>
                        <ModalInputBox value = {id} name="adminId" onChange={handleChange}></ModalInputBox>
                    </ModalInputWrapper>
                    <ModalInputWrapper>
                        <ModalInputTitle>PW</ModalInputTitle>
                        <ModalInputBox value = {password} type="password" name="password" onChange={handleChange}></ModalInputBox>
                    </ModalInputWrapper>
                    <ModalWorngIDPW wrong={wrong}>ID 또는 PW가 틀렸습니다.</ModalWorngIDPW>
                </ModalBodyWrapper>
                <ModalLoginButton onClick={onButtonClick}>
                    <p>로그인</p>
                </ModalLoginButton>
            </Modal>
        </ModalWrapper>
    );
};

export default LoginModal;