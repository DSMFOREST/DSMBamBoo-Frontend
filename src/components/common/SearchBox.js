import React from 'react';
import styled from 'styled-components';

const InputBox = styled.input`
    font-family: NanumGothic;
    color: #707070;
    font-size: 1.3rem;
    border: 0;
    width: 40rem;
`

const SearchBoxWrapper = styled.div`
    width: 65rem;
    height: 4.5rem;
    border-radius: 0.88rem;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.11);
    background-color: #ffffff;
    display: flex;
    margin-top: 3rem;
    align-items: center;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
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

const SearchBox = () => {
    return (
        <Wrapper>
            <SearchBoxWrapper>
                <Category name="category">
                    <option value="카테고리">카테고리</option>
                </Category>
                <InputBox placeholder="검색어를 입력해 주세요"></InputBox>
            </SearchBoxWrapper>
        </Wrapper>
    )
}

export default SearchBox;