import React from 'react';

import { Container } from './styles';

export default function Player() {

  return (
    <Container>
      <header>
        <img src="/icons/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>

      <div className="empty-player">
        <strong>Selecione um podcast para ouvir</strong>
      </div>

      <footer className=''>
        <div className="progress">
          <span>00:00</span>
          <div className="slider">
            <div className='empty-slider' />
          </div>
          <span>00:00</span>
        </div>

        <div className="buttons">
          <button type='button'>
            <img src="/icons/shuffle.svg" alt="Embaralhar"/>
          </button>
          <button type='button'>
            <img src="/icons/play-previous.svg" alt="Tocar anterior"/>
          </button>
          <button type='button' className='play-button'>
            <img src="/icons/play.svg" alt="Tocar"/>
          </button>
          <button type='button'>
            <img src="/icons/play-next.svg" alt="Tocar próximo"/>
          </button>
          <button type='button'>
            <img src="/icons/repeat.svg" alt="repetir"/>
          </button>
        </div>
      </footer>
    </Container>
  );
}
