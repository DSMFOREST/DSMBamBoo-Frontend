import React from 'react';

import styled from 'styled-components';

import BambooForestImage from '../../assest/background/bambooforest.jpg';

import arrowIcon from '../../assest/icon/arrow.png';

import Table from './Table';

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
    height: auto;
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

const SearchBoxWrapper = styled.div`
    width: 65rem;
    height: 4.5rem;
    border-radius: 0.88rem;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.11);
    background-color: #ffffff;
    display: flex;
    margin-top: 3rem;
`

const Category = styled.select`
    font-family: NanumGothic;
    color: #707070;
    border: 0;
    background-color: #ffffff;
    margin-left: 2rem;
    margin-right: 6rem;
    font-size: 1.3rem;
`

const SearchBox = styled.input`
    font-family: NanumGothic;
    color: #707070;
    font-size: 1.3rem;
    border: 0;
    width: 40rem;
`

const TableWrapper = styled.div`
    display: flex;
    margin-top: 4rem;
    flex-direction: column;
    align-items: center;
`
const TableHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #8e8e8e;
    width: 70rem;
    & p{
        font-family: SegoeUI;
        color: #444444;
        font-size: 1.4rem;
        font-weight: bold;
        margin: 0 5rem 1rem 5rem;
    }
    justify-content: space-between;
    box-shadow: 0px 8px 20px -15px #111;
`

const LeftArrow = styled.i`
    border: solid #7bbb5a;
    border-width: 0 1.5px 1.5px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    height: 0.3px;
    margin-right: 2rem;
    margin-top: 1.8rem;
`

const RightArrow = styled.i`
    border: solid #7bbb5a;
    border-width: 0 1.5px 1.5px 0;
    display: inline-block;
    padding: 3px;
    height: 0.3px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    margin-left: 2rem;
    margin-top: 1.8rem;
`

const TableBottom = styled.div`
    display: flex;
    margin-top: 3rem;
    & p{
        font-family: NanumGothic;
        color: #444444;
        font-weight: bold;
        font-size: 1.3rem;
    }
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
                <SearchBoxWrapper>
                    <Category name="category">
                        <option value="카테고리">카테고리</option>
                    </Category>
                    <SearchBox placeholder="검색어를 입력해 주세요"></SearchBox>
                </SearchBoxWrapper>
                <TableWrapper>
                    <TableHeader>
                        <p>번호</p>
                        <p>제목</p>
                        <p>등록일</p>
                    </TableHeader>
                    <Table></Table>
                    <TableBottom>
                        <LeftArrow />
                        <p>1</p>
                        <RightArrow />
                    </TableBottom>
                </TableWrapper>
            </StoryBambooWrapper>
        </TopSectionWrapper>
    )
}

export default ChoiceSection;