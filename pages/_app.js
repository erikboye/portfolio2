import "../styles/globals.css";
import GlobalStyle from "../styles/globals";

import Heading from "../components/heading/Heading";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
