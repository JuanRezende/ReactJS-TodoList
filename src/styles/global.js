import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    font-size: 16px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Inter', serif;
    font-size: 1rem;
    outline: none;
  }

  button, a {
    cursor: pointer;
    transition: filter .2s;
  }

  a {
    text-decoration: none;
  }
`;
