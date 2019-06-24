import React, { Component } from 'react';

import { createGlobalStyle } from 'styled-components'

import HeaderContainer from './containers/common/HeaderContainer.js'
import ChoiceSectionContainer from './containers/common/ChoiceSectionContainer.js'
import PostModalContainer from './containers/common/PostModalContainer'

import HSBomBaramFont from './assest/fonts/HSBomBaram.ttf'
import NanumGothicFont from './assest/fonts/NanumGothic.woff'
import LoginModalContainer from './containers/common/LoginModalContainer.js';

const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;
  }

  @media screen and (max-width: 1500px) {
    html {
      font-size: 11.383px;
    }
  }
  
  @font-face {
    font-family: 'HSBomBaram';
    src: url(${HSBomBaramFont});
    font-weight: normal;
  }

  @font-face {
    font-family: 'NanumGothic';
    src: url(${NanumGothicFont});
    font-weight: normal;
  }
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <PostModalContainer />
        <HeaderContainer />
        <ChoiceSectionContainer />
        <LoginModalContainer></LoginModalContainer>
      </div>
    );
  }
}

export default App;
