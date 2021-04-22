import React from 'react';
import Image from 'next/image';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { usePlayerContext } from '../../contexts/playerContext';

import { Container } from './styles';

export default function Player() {

  const playerContext = usePlayerContext();

  return (
    <Container>
      <header>
        <img src="/icons/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>

      {playerContext.currentEpisode 
        ? (
          <div className="player-image">
            <Image 
              width={960}
              height={960}
              src={playerContext.currentEpisode.thumbnail} 
              alt={playerContext.currentEpisode.description} 
            />

            <strong>{playerContext.currentEpisode.title}</strong>
            <p>{playerContext.currentEpisode.members}</p>
          </div>
        ) : (
          <div className="player-image empty">
            <strong>Selecione um podcast para ouvir</strong>
          </div>
        )
      }

      <footer className={playerContext.currentEpisode ? '' : 'empty'}>
        <div className="progress">
          <span>00:00</span>
          <div className="slider">
            {playerContext.currentEpisode 
              ? (
                <Slider 
                  trackStyle={{
                    backgroundColor: '#04D361',
                  }}
                  railStyle={{
                    backgroundColor: '#9F75FF',
                  }}
                  handleStyle={{
                    borderColor: '#04D361',
                    borderWidth: 4,
                  }}
                />
              ) : (
                <div className='empty-slider' />
              )
            }
          </div>
          <span>{playerContext.currentEpisode ? playerContext.currentEpisode.durationAsString : '00:00'}</span>
        </div>

        <div className="buttons">
          <button 
            type='button'
            disabled={playerContext.currentEpisode ? false : true}
            onClick={() => playerContext.shuffe()}
          >
            <img src="/icons/shuffle.svg" alt="Embaralhar"/>
          </button>
          <button 
            type='button'
            disabled={playerContext.currentEpisode ? false : true}
            onClick={() => playerContext.playPrevious()}
          >
            <img src="/icons/play-previous.svg" alt="Tocar anterior"/>
          </button>
          {playerContext.isPlaying
            ? (
              <button 
                type='button'
                className='play-button'
                onClick={() => playerContext.pause()}
              >
                <img src="/icons/pause.svg" alt="Pausar"/>
              </button>
            ) : (
              <button 
                type='button' 
                className='play-button'
                disabled={playerContext.currentEpisode ? false : true}
                onClick={() => playerContext.resume()}
              >
                <img src="/icons/play.svg" alt="Tocar"/>
              </button>
            )
          }
          <button 
            type='button'
            disabled={playerContext.currentEpisode ? false : true}
            onClick={() => playerContext.playNext()}
          >
            <img src="/icons/play-next.svg" alt="Tocar próximo"/>
          </button>
          <button 
            type='button'
            disabled={playerContext.currentEpisode ? false : true}
          >
            <img src="/icons/repeat.svg" alt="repetir"/>
          </button>
        </div>
      </footer>

    </Container>
  );
}
