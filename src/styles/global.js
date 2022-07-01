import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`    
  html {
    height: 100%;
  }
  body {
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.bg};
  }
  #__next,
  .main {
      display: flex;
      flex-direction: column;
      height: 100%;
      flex:1;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
      color: ${(props) => props.theme.textPrimary};
      margin: 0;
  }
  p {
      color: ${(props) => props.theme.textPrimary};
      margin: 0;
      margin-bottom: 24px;
  }
  * {
    box-sizing: border-box; 
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;