import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --font-mont: 'Montserrat', sans-serif;
    --font-bebas: 'Bebas Neue', cursive;
  
    /* FONT SIZES */
    --font-size-base: 16px;
    --font-size-erik: 18px;
    --font-size-xxs: 0.296rem;
    --font-size-xs: 0.444rem;
    --font-size-sm: 0.667rem;
    --font-size: 1rem;
    --font-size-md: 1.5rem;
    --font-size-lg: 2.25rem;
    --font-size-xl: 3.375rem;
    --font-size-xxl: 5.9rem;
    --font-size-huge: 7.594rem;
    --font-size-jumbo: 11.391rem;
  
    /* SPACING */
    --size-xxs: 4px;
    --size-xs: 7px;
    --size-sm: 11px;
    --size: 16px;
    --size-md: 24px;
    --size-lg: 36px;
    --size-xl: 54px;
    --size-xxl: 81px;
    --size-huge: 121px;
    --size-jumbo: 182px;
  
    /* COLORS */
    --logo-color: rgba(255, 255, 255, 0.8);
    --orange-color: rgba(255, 122, 0, 0.8);
    --h1-hero: rgba(255, 255, 255, 0.85);
    --h3-hero: rgba(126, 135, 114, 1);
    --color-primary: #384531;
    --color-tertiary: #4281a4;
    --color-quaternary: #dadada;
    --color-white: #fff;
    --color-black: #282828;
    --color-bg: linear-gradient(180deg, #000000 50%, rgba(0, 0, 0, 0.1) 100%);

    --c-action: var(--navitem-color);
    --c-danger: rgb(190, 47, 47);
    --c-success: var(--color-primary);
    --c-info: var(--color-tertiary);
    --c-text: var(--color-black);
    --c-text--inverse: var(--color-white);
    --c-disabled: var(--color-quaternary);
  
    /* RADIUS */
    --radius-base: 6px;
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 10px;
  
    /* Animation speed */
    --speed-base: 300ms;
    --speed-fast: 120ms;
    --speed-medium: 200ms;
    --speed-slow: 500ms;
  
    --animate-duration: var(--speed-base);
    --animate-delay: var(--speed-fast);
  
    /* Z-index */
    --z-base: 300;
    --z-ground: 400;
    --z-cieling: 1000;
    --z-sky: 9999;
  
    /* Elevation */
    --shadow-base: 0 2px 2px 0 rgb(0 0 0 / 14%);
    --shadow-1: 0 3px 4px 0 rgb(0 0 0 / 14%);
    --shadow-2: 0 5px 6px 0 rgb(0 0 0 / 16%);
    --shadow-3: 0 8px 10px 0 rgb(0 0 0 / 22%);
  
    @media screen and (min-width: 991) {
      --font-size-base: 18px;
      --size-xxs: 6px;
      --size-xs: 8px;
      --size-sm: 13px;
      --size: 20px;
      --size-md: 30px;
      --size-lg: 40px;
      --size-xl: 58px;
      --size-xxl: 92px;
      --size-huge: 130px;
      --size-jumbo: 150px;
    }
  }
  
  html {
    background: var(--color-bg);
    font-family: var(--font-body);
    font-size: var(--font-size-base);
    scroll-behavior: smooth;
  }
  
  html,
  body {
    height: 100%;
    padding: 0px;
    margin: 0px;
  }


  
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  
  a {
    color: var(--c-action);
  }

  h1,h2,h3,p {
    margin-bottom: 0px;
  }

  h1 {
    margin-top: 0px;
  }


  
  .my-element {
    display: inline-block;
    margin: 0 0.5rem;
  
    animation: bounce; /* referring directly to the animation's @keyframe declaration */
    animation-duration: var(--speed-medium); /* don't forget to set a duration! */
  }
`;

export default GlobalStyle;
