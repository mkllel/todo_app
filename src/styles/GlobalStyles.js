import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'iceHimchan-Rg';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/iceHimchan-Rg.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'iceHimchan-Rg', cursive;
    background-color: cornflowerblue;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  #root {
    width: 100%;
    max-width: 500px;
  }
  h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 30px;
  }
`;

export default GlobalStyles;
