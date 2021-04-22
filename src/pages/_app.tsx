import React from 'react';
import { AppProps } from 'next/app';

import GlobalStyles from '../styles/GlobalStyles';
import Layout from '../components/Layout';
import { PlayerProvider } from '../contexts/playerContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <PlayerProvider>

      <GlobalStyles />

      <Layout>
        <Component {...pageProps} />
      </Layout>

    </PlayerProvider>
  );
}
