import React from 'react';

import styled, { keyframes } from 'styled-components';

import foxImage from '../../assest/image/fox.jpg'
import rightArrowIcon from '../../assest/icon/rightArrow.png'
import leftArrowIcon from '../../assest/icon/leftArrow.png'

import verifiedIcon from '../../assest/icon/verified.png'


const intro = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
  }
`

const PostModalNoticeWrapper = styled.div`
    margin-top: 2.75rem;
`

const PostModalNoticeRuleWrapper = styled.div`
`

const PostModalNoticeRule = styled.div`
    font-family: 'NanumGothic';
    font-size: 1.25rem;
    color: #707070;
    line-height: 1.8;

    & span {
        color: #697c4e;
        font-weight: 800;
    }
`

const VerifyWrapper = styled.div`
    padding-right: 3.75rem;
    display: flex;
    justify-content: space-between;
`

const CaptchaWrapper = styled.div`
    height: 13.125rem;
    width: 13.125rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const CaptchaContentWrapper = styled.div`
    width: 100%;
    padding: 1.5rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    box-sizing: border-box;
    display: flex;
    justify-content: ${props => !props.captcha ? `space-between` : `center`};
    align-items: center;
`

const CaptchaHeaderWrapper = styled.div`

`

const CaptchaHeaderTitle = styled.div`
    font-family: 'NanumGothic';
    font-size: 0.95rem;
`

const CaptchaImage = styled.div`
    border-radius: 50%;
    height: 5.25rem;
    width: 5.25rem;
    background-image: url(${foxImage});
    background-size: cover;
    border: 0.125rem solid #707070;
    box-sizing: border-box;
    transform: rotate${props => `(${props.degree}deg)`};
    transition: transform 0.3s;
`

const VerifiedIcon = styled.div`
    height: 5.25rem;
    width: 5.25rem;
    background-image: url(${verifiedIcon});
    background-size: cover;
    box-sizing: border-box;
    animation-duration: 0.5s;
    animation-fill-mode: both;
    animation-name: ${intro};
`

const CaptchaRightArrow = styled.div`
    height: 1.7rem;
    width: 1.7rem;
    background-image: url(${rightArrowIcon});
    background-size: cover;
    box-sizing: border-box;
`

const CaptchaLeftArrow = styled.div`
    height: 1.7rem;
    width: 1.7rem;
    background-image: url(${leftArrowIcon});
    background-size: cover;
    box-sizing: border-box;
`

const CaptchaVerifyButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 1.8rem;
    border: solid 0.125rem #070707;
    font-family: 'NanumGothic';
    font-size: 1.1rem;
    color: #070707;
    border-radius: 0.75rem;
    background-color: #ffffff;
    transition: background 0.5s;
    cursor: pointer;

    &:active {
        background-color: rgba(7, 7, 7, 0.2);
    }
`

const CaptchaVerifyNotice = styled.div`
    margin-top: 1rem;
    font-family: 'NanumGothic';
    font-size: 1rem;
    ${props => props.captcha ? `color: #697c4e;` : `color: #ff7070;`}
`

const PostModalNotice = ({captchaCount, captcha, onHandleVerifyCaptcha, degree, onHandleRight, onHandleLeft}) => {
    return (
        <PostModalNoticeWrapper>
            <PostModalNoticeRuleWrapper>
                <PostModalNoticeRule>1. <span>규칙</span>을 꼭 읽어주세요. 규칙에 위배되는 경우 게시글 등록이 불가능합니다.</PostModalNoticeRule>
                <PostModalNoticeRule>2. 등록된 게시글은 수정 및 삭제가 불가능하니 신중하게 글을 작성바랍니다.</PostModalNoticeRule>
                <PostModalNoticeRule>3. 제보된 글은 관리자의 승인이 있어야 게시됩니다.</PostModalNoticeRule>
                <PostModalNoticeRule>4. 대나무숲 규칙을 확인하지 않으면 제보하기 버튼이 눌리지 않습니다.</PostModalNoticeRule>
                <PostModalNoticeRule>5. 대마고 대나무숲은 대마인만 제보가능 합니다.</PostModalNoticeRule>
            </PostModalNoticeRuleWrapper>
            <VerifyWrapper>
                <div></div>
                <CaptchaWrapper>
                    <CaptchaHeaderWrapper>
                        <CaptchaHeaderTitle>
                            해당 여우를 자연스러운 방향으로 만들어주세요.
                        </CaptchaHeaderTitle>
                    </CaptchaHeaderWrapper>
                    <CaptchaContentWrapper captcha = {captcha}>
                        { 
                         !captcha ?
                            <>
                                <CaptchaRightArrow onClick = {onHandleRight}/>
                                <CaptchaImage degree = {degree}/>
                                <CaptchaLeftArrow onClick = {onHandleLeft}/>
                            </>
                            :
                            <VerifiedIcon />
                        }
                    </CaptchaContentWrapper>
                    {   !captcha ?
                        <CaptchaVerifyButton onClick = {onHandleVerifyCaptcha}>
                            인증
                        </CaptchaVerifyButton>
                        :
                        <CaptchaVerifyNotice captcha = {captcha}>
                            인증에 성공했습니다!
                        </CaptchaVerifyNotice>
                    }
                    {   
                        captchaCount < 3 &&
                        <CaptchaVerifyNotice captcha = {captcha}>
                            { !captcha && `기회가 ${captchaCount}번 남았습니다.` }
                        </CaptchaVerifyNotice>
                    }
                </CaptchaWrapper>
            </VerifyWrapper>
        </PostModalNoticeWrapper>
    );
};

export default PostModalNotice;