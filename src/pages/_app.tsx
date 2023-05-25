import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import { AppProps } from 'next/app';

const globalStyles = css`
  /* Zde můžete definovat vaše globální styly */

  body {
    font-family: Arial, sans-serif;
    padding: 20px; 

  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
