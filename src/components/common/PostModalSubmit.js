import React from 'react';

import cancelIcon from '../../assest/icon/cancel.png';

import styled from 'styled-components'

const PostModalSubmitWrapper = styled.div`
    display: flex;
    height: 27.25rem;
    width: 100%;
    box-sizing: border-box;
    padding-right: 3.75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`

const PostModalSubmitInputWrapper = styled.div`
    position: relative;
    top: -0.0625rem;
    width: 100%;
    height: 23.875rem;
    box-sizing: border-box;
    border: solid 0.0625rem #e1e1e1;
    border-radius: 0.625rem;
`

const PostModalSubmitCategoryWrapper = styled.div`

`

const NotVerifiedWrapper = styled.div`
    display: flex;
    height: 13rem;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 50%;
    transform: translateY(-50%); 
`

const NotVerifiedIcon = styled.div`
    background-image: url(${cancelIcon});
    width: 7.5rem;
    height: 7.5rem;
    background-size: cover;
    background-repeat: no-repeat;
`

const NotVerified = styled.span`
    font-family: 'NanumGothic';
    font-size: 1.5rem;

    & .verify {
        color: #ff7070;
        font-weight: 800;
    }

    & .notice {
        color: #697c4e;
        font-weight: 800;
    }
`

const PostModalSubmit = ({captcha}) => {
    return (
        <PostModalSubmitWrapper>
            {captcha ?
                <PostModalSubmitInputWrapper>
                    <PostModalSubmitCategoryWrapper>

                    </PostModalSubmitCategoryWrapper>
                </PostModalSubmitInputWrapper>
                : 
                <NotVerifiedWrapper>
                    <NotVerifiedIcon />
                    <NotVerified>
                        <span className = "verify">인증</span>이 필요합니다.
                    </NotVerified>
                    <NotVerified>
                        <span className = "notice">필수 공지</span>에서 <span className = "verify">인증</span>을 진행해주세요.
                    </NotVerified>
                </NotVerifiedWrapper>
            }
        </PostModalSubmitWrapper>
    );
};

export default PostModalSubmit;