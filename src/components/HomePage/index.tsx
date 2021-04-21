import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Container, EpisodeCardContainer } from './styles';
import { IEpisode } from '../../pages/index';

interface IProps {
  episodes: Array<IEpisode>;
}

export default function HomePage({ episodes }: IProps) {



  function lastReleaseCard(episode: IEpisode) {

    return (
      <EpisodeCardContainer>

        <figure className='episode-thumbnail'>
          <Image 
            width={288} 
            height={288} 
            src={episode.thumbnail} 
            alt={episode.description} 
          />
        </figure>

        <div className="info">
          <Link href={`/episode/${episode.id}`}>
            <a>{episode.title}</a>
          </Link>

          <footer>
            <span>
              <p>{episode.members}</p>
              <p>{episode.publishedAt} ∙ {episode.durationAsString}</p>
            </span>
            
            <button type='button'>
              <img src="/icons/play-green.svg" alt="tocar" />
            </button>
          </footer>
        </div>

      </EpisodeCardContainer>
    );
  }

  return (
    <Container>

      <section>
        <h2>Ultimos lançametos</h2>

        <div className="last-releases">
          {lastReleaseCard(episodes[0])}
          {lastReleaseCard(episodes[1])}
        </div>
      </section>

      <section>
        <h2 className='all-episodes'>Todos os episódios</h2>

        <table cellSpacing={0}>
          <thead>
            <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            <th>Podcast</th>
            <th>Integrantes</th>
            <th>Data</th>
            <th>Duração</th>
            <th></th>
          </thead>
          <tbody>
            {episodes.slice(2, episodes.length).map((episode) => (
              <tr key={episode.id}>
                <td>
                  <Image 
                    width={120}
                    height={120}
                    src={episode.thumbnail} 
                    alt={episode.description} 
                  />
                </td>
                <td>
                  <Link href={`/episode/${episode.id}`}>
                    <a>{episode.title}</a>
                  </Link>
                </td>
                <td>{episode.members}</td>
                <td style={{ width: 100 }}>{episode.publishedAt}</td>
                <td>{episode.durationAsString}</td>
                <td>
                  <button type='button'>
                    <img src="icons/play-green.svg" alt="Tocar"/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </section>
      
    </Container>
  );
}