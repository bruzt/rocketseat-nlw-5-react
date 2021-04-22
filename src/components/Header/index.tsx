import React from 'react';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import Link from 'next/link';

import { Container } from './styles';

export default function Header() {

  const date = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR
  });

  return (
    <Container>
      
      <Link href='/'>
        <a>
          <figure>
            <img src="logo.svg" alt="Podcastr"/>
          </figure>
        </a>
      </Link>

      <div className="header-date">
        <p>O melhor para você ouvir, sempre</p>
        <span>{date}</span>
      </div>

    </Container>
  );
}
