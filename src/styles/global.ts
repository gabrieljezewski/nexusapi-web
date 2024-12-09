import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #FFF;
    --black: #000;

    --background-white: #FCFAFF;

    --purple-primary: #AC54EB;
    --purple-secondary: #4a2564;
    --purple-800: #C17EF2;
    --purple-100: #F2DEFE;

    --dark-gray: #22222E;

    --gray-300: #ACB7BD;
    --gray-50: #EEEEEE;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    .ant-typography {
      /* margin: 0 !important; */
    }

    .ant-drawer .ant-drawer-body {
      padding: 0;
    }
  }

  html,
  body {
    width: 100vw;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;