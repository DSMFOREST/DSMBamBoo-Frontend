import React from 'react';

import styled from 'styled-components';

const TableWrapper = styled.div`
    display: flex;
    width: 70rem;
`

const Number = styled.p`
    color: #444444;
    font-family: NanumGothic;
    font-weight: bold;
    font-size: 1.3rem;
    text-align: center;
    width: 12rem;
`

const Title = styled.p`
    color: #444444;
    font-family: NanumGothic;
    font-weight: bold;
    font-size: 1.3rem;
    width: 40rem;
    margin-left: 5rem;
`

const Date = styled.p`
    font-family: NanumGothic;
    color: #444444;
    margin-left: 1.1rem;
`

const ContentSection = () => {
    return (
        <TableWrapper>
            <Number>1</Number>
            <Title>대나무숲 운영 지침</Title>
            <Date>2019.04.01 23:55:00</Date>
        </TableWrapper>
    );
};

export default ContentSection;