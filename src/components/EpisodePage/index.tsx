import React from 'react';
import { useRouter } from 'next/router';

import { usePlayerContext } from '../../contexts/playerContext';

import { IEpisode } from '../../pages';

import { Container } from './styles';

interface IProps {
  episode: IEpisode
}

export default function EpisodePage({ episode }: IProps) {

  const router = useRouter();
  const playerContext = usePlayerContext();

  return (
    <Container>
      <section>

        <figure>
          <img src={episode.thumbnail} alt={episode.title} />
          <button 
            type='button'
            className='back'
            onClick={() => router.push('/')}
          >
            <img src="/icons/arrow-left.svg" alt="voltar"/>
          </button>
          <button 
            type='button'
            className='play'
            onClick={() => playerContext.play(episode)}
          >
            <img src="/icons/play.svg" alt="Tocar"/>
          </button>
        </figure>

        <h1>{episode.title}</h1>

        <div className="info">
          {episode.members} ∙ {episode.publishedAt} ∙ {episode.durationAsString}
        </div>

        <div 
          dangerouslySetInnerHTML={{ __html: episode.description }} 
          className='description'
        />
        
      </section>
    </Container>
  );
}
