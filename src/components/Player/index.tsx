import React, { useState } from 'react';
import Image from 'next/image';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { RiVolumeVibrateFill } from 'react-icons/ri';
import ClickAwayListener from 'react-click-away-listener';

import { usePlayerContext } from '../../contexts/playerContext';

import { Container } from './styles';
import convertDurationToTimeString from '../../utils/convertDurationToTimeString';

export default function Player() {

  const [isVolumeOpen, setIsVolumeOpen] = useState(false);

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
          <span>{convertDurationToTimeString(playerContext.progress)}</span>
          <div className="slider">
            {playerContext.currentEpisode 
              ? (
                <Slider 
                  max={playerContext.currentEpisode.duration}
                  value={playerContext.progress}
                  onChange={playerContext.handleSliderChange}

                  trackStyle={{
                    backgroundColor: '#04D361',
                  }}
                  railStyle={{
                    backgroundColor: '#9F75FF',
                  }}
                  handleStyle={{
                    borderColor: '#04D361',
                    borderWidth: 4,
                    cursor: 'grabbing',
                  }}
                />
              ) : (
                <div className='empty-slider' />
              )
            }
          </div>
          <span>{convertDurationToTimeString(playerContext.currentEpisode?.duration ?? 0)}</span>
        </div>

        <div className="buttons">
          {/*
          <button 
            type='button'
            title='Aleatório'
            disabled={playerContext.currentEpisode == null}
            onClick={() => playerContext.shuffe()}
          >
            <img src="/icons/shuffle.svg" alt="Embaralhar"/>
          </button>
          */}
          <div className="volume-container">
            <button 
              type='button'
              title='Volume'
              disabled={playerContext.currentEpisode == null}
              onClick={() => setIsVolumeOpen(!isVolumeOpen)}
            >
              <RiVolumeVibrateFill size={23} color='#FFFF' />
            </button>
            {isVolumeOpen && (
              <ClickAwayListener onClickAway={() => setIsVolumeOpen(false)}>
                <div className="volume-slider">
                  <Slider
                    vertical={true}
                    max={100}
                    value={playerContext.volume}
                    onChange={playerContext.handleVolumeChange}

                    trackStyle={{
                      backgroundColor: '#04D361',
                    }}
                    railStyle={{
                      backgroundColor: '#8257E5',
                    }}
                    handleStyle={{
                      borderColor: '#04D361',
                      borderWidth: 4,
                      cursor: 'grabbing',
                    }}
                  />
                </div>
              </ClickAwayListener>
            )}
          </div>
          <button 
            type='button'
            title='Anterior'
            disabled={playerContext.currentEpisode == null || playerContext.hasPrevious == false}
            onClick={() => playerContext.playPrevious()}
          >
            <img src="/icons/play-previous.svg" alt="Tocar anterior"/>
          </button>
          {playerContext.isPlaying
            ? (
              <button 
                type='button'
                title='Pausar'
                className='play-button pause'
                onClick={() => playerContext.pause()}
              >
                <img src="/icons/pause.svg" alt="Pausar"/>
              </button>
            ) : (
              <button 
                type='button' 
                title='Tocar'
                className='play-button'
                disabled={playerContext.currentEpisode == null}
                onClick={() => playerContext.resume()}
              >
                <img src="/icons/play.svg" alt="Tocar"/>
              </button>
            )
          }
          <button 
            type='button'
            title='Próximo'
            disabled={playerContext.currentEpisode == null || playerContext.hasNext == false}
            onClick={() => playerContext.playNext()}
          >
            <img src="/icons/play-next.svg" alt="Tocar próximo"/>
          </button>
          <button 
            type='button'
            title='Repetir'
            className={playerContext.isLooping ? 'active' : ''}
            //disabled={playerContext.currentEpisode == null}
            onClick={playerContext.toggleIsLooping}
          >
            <img src="/icons/repeat.svg" alt="repetir"/>
          </button>
        </div>
      </footer>

    </Container>
  );
}
