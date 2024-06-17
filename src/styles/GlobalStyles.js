import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Arial, sans-serif;
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
