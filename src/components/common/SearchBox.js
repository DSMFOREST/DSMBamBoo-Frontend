import React from 'react';
import styled from 'styled-components';

const SearchBoxWrapper = styled.div`
    width: 91rem;
    height: 5.9rem;
    border-radius: 0.88rem;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.11);
    background-color: #ffffff;
    display: flex;
`

const Category = styled.select`
    font-family: NanumGothic;
    color: #707070;
`

const SearchBox = () => {
    return (
        <SearchBoxWrapper>
            <Category name="category">
                <option value="카테고리">카테고리</option>
            </Category>
        </SearchBoxWrapper>
    )
}

export default SearchBox;