import { injectGlobal } from 'styled-components'
import { normalize } from 'polished'

export const font = {
  primary: `'PT Mono', sans-serif`,
  system: `-apple-system, BlinkMacSystemFont,
   "Segoe UI", "Roboto", "Oxygen",
   "Ubuntu", "Cantarell", "Fira Sans",
   "Droid Sans", "Helvetica Neue", sans-serif`,
}

export const color = {
  primary: 'hsl(40, 28%, 100%)',
  secondary: 'hsl(40, 28%, 95%)',
  black: '#272121',
  highlight: 'hsl(350, 70%, 40%)',
  code: 'hsl(0, 9%, 14%)',
}

export default () => injectGlobal`
  ${normalize()}

  html{
    box-sizing: border-box;
    font-size: 62.5%;
    background: ${color.black};
  }

  body {
    font-family: ${font.system};
    min-height: 100vh;
    position: relative;
    background: ${color.black};
    color: ${color.secondary};
    font-size: 1.8em;
    font-weight: 300;
    letter-spacing: .01em;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    transition: background 0.5s ease;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  a{
    color: inherit;

    &:hover, &:focus{
      color: inherit;
    }
  }

  p {
    margin-top: 0;
    margin-bottom: 1em;
  }

  h1, h2, h3, h4, h5 ,h6{
    margin: 0;
    margin-bottom: 1em;

    &:last-child {
      margin-bottom: 0;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    ${'' /* mix-blend-mode: lighten; */}
  }

  .embed-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      mix-blend-mode: lighten;
    }
  }

  code {
    background: whitesmoke;
    padding: 0.2em 0.4em;
    font-size: 85%;
    overflow: auto;
    max-width: 100%;
    display: inline-block;
    vertical-align: middle;
  }

  pre {
    background: ${color.code};
    padding: 1rem;
    word-wrap: normal;
    overflow: auto;

    code {
      background: none;
      color: #ABB2BF;
      padding: 2rem;
    }

    &[class*="language-"] {
      background:  ${color.code};
      margin: 4rem auto;
    }

  }

  ::selection{
    background: ${color.primary};
    opacity: 1;
  }

  .animate-translate {
    display: block;
  }
`
