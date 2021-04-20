import React from 'react';

import Header from '../Header';
import Player from '../Player';

import { Container } from './styles';

type IProps = {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {

  return (
    <Container>
      <main>
        <Header />
        {children}
      </main>
      <Player />
    </Container>
  );
}
