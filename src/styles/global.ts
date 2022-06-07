import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${props => theme.colors.background};
    color: ${props => theme.colors.text};
    font: 400 16px Roboto, sans-serif;
    margin-top: 70px;
    margin-left: 10px;
  }
  .myToolbar {
    justify-content: space-between;
  }
`
