import React from 'react';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import { Container } from './styles';

export default function Header() {

  const date = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR
  });

  return (
    <Container>
      
      <figure>
        <img src="logo.svg" alt="Podcastr"/>
      </figure>

      <div className="header-date">
        <p>O melhor para você ouvir, sempre</p>
        <span>{date}</span>
      </div>
    </Container>
  );
}
