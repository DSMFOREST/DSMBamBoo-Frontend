import React from 'react'

import styled from 'styled-components'

import BambooForestImage from '../../assest/background/bambooforest.jpg'

import arrowIcon from '../../assest/icon/arrow.png'

const ChoiceSectionWrapper = styled.div`
    position: relative;
    height: 27.125rem;
    width: 100%;
    background-image: url(${BambooForestImage});
    background-size: contain;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ChoiceSectionOpacity = styled.div`
    height: 27.125rem;
    width: 100%;
    position: absolute;
    background-color: #ebfed8;
    opacity: 0.5;
    z-index: 9999;
`

const ChoiceSectionButtonWrapper = styled.div`
    width: 68.25rem;
    position: absolute;
    height: 5.625rem;
    bottom: 0;
    display: flex;
    max-width: 100%;
`

const ChoiceSectionText = styled.div`
    font-family: 'NanumGothic';
    font-size: 3.125rem;
    color: #444444;
    font-weight: bold;
    z-index: 10000;

    & .bold {
        font-weight: 800;
    }
`

const StoryBambooWrapper = styled.div`
    height: 26.75rem;
    box-sizing: border-box;
    padding-top: 5.5625rem;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const StoryBambooTitleWrapper = styled.div`
    display: flex;
    width: 200vw;
    transform: translateX(50vw);
    position: relative;
    ${props => props.section === "대나무숲" &&
        `transform: translateX(-50vw);`
    }
    transition: transform 1s ease;
`

const StoryBambooDot = styled.div`
    margin-top: 2.3125rem;
    width: 1.875rem;
    height: 0.625rem;
    background-color: #607151;
    border-radius: 50%;
`

const StoryBambooDescriptionWrapper = styled.div`
    margin-top: 3.5625rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StoryBambooDescription = styled.span`
    font-size: 1.5625rem;
    font-family: 'NanumGothic';
    color: #707070;
`

const TopSectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const NoticeTitle = styled.div`
    width: 100vw;
    font-size: 3.125rem;
    font-family: 'NanumGothic';
    font-weight: 800;
    text-shadow: 0 0.1875rem 0.375rem rgba(0, 0, 0, 0.16);
    display: flex;
    justify-content: center;
`

const BambooTitle = styled.div`
    width: 100vw;
    font-size: 3.125rem;
    font-family: 'NanumGothic';
    font-weight: 800;
    text-shadow: 0 0.1875rem 0.375rem rgba(0, 0, 0, 0.16);
    display: flex;
    justify-content: center;
`

const StoryBambooArrow = styled.div`
    margin-top: 2.46875rem;
    background-image: url(${arrowIcon});
    width: 3rem;
    height: 2.375rem;
    background-size: cover;
`

const ChoiceSection = ({section, choiceButtons}) => {
    return (
        <TopSectionWrapper>
            <ChoiceSectionWrapper>
                <ChoiceSectionText>
                    <span className = "bold">대마고</span> 대나무숲입니다!
                </ChoiceSectionText>
                <ChoiceSectionButtonWrapper>
                    {choiceButtons}
                </ChoiceSectionButtonWrapper>
                <ChoiceSectionOpacity />
            </ChoiceSectionWrapper>
            <StoryBambooWrapper>
                <StoryBambooTitleWrapper section = {section}>
                    <NoticeTitle>
                        공지사항
                    </NoticeTitle>
                    <BambooTitle>
                        대나무숲 이야기
                    </BambooTitle>
                </StoryBambooTitleWrapper>
                <StoryBambooDot />
                <StoryBambooDescriptionWrapper>
                    <StoryBambooDescription>
                        대나무숲에 이야기를 제보해주세요.
                    </StoryBambooDescription>
                    <StoryBambooDescription>
                        사용전 공지사항을 꼭 읽고 제보해주세요.
                    </StoryBambooDescription>
                </StoryBambooDescriptionWrapper>
                <StoryBambooArrow />
            </StoryBambooWrapper>
        </TopSectionWrapper>
    )
}

export default ChoiceSection;