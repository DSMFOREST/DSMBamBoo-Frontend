import React from 'react';
import styled from 'styled-components'

const HeaderWrapper = styled.div`
    height: 6.6875rem;
    width: calc(100% - 14.9375rem);
    padding-right: 6.5rem;
    padding-left: 8.4375rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const HeaderTitle = styled.div`
    font-family: 'HSBomBaram';
    font-size: 2.5rem;
    color: #607151;
`

const HeaderLogin = styled.div`
    font-family: 'NanumGothic';
    font-size: 1.25rem;
    color: #444444;
    cursor: pointer;
`

const Header = ({LoginSwitchon}) => {
    return (
        <HeaderWrapper>
            <HeaderTitle>대마고 대나무숲</HeaderTitle>
            <HeaderLogin onClick = {LoginSwitchon}>관리자 로그인</HeaderLogin>
        </HeaderWrapper>
    );
};

export default Header;