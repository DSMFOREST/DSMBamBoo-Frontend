import React from 'react';
import styled from 'styled-components';
import ContentSection from './ContentSection';

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
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.16);
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

const Table = ({contents}) => {
    return (
        <TableWrapper>
            <TableHeader>
                <p>번호</p>
                <p>제목</p>
                <p>등록일</p>
            </TableHeader>
            <ContentSection />
            <TableBottom>
                <LeftArrow />
                <p>1</p>
                <RightArrow />
            </TableBottom>
        </TableWrapper>
    )
}

export default Table;