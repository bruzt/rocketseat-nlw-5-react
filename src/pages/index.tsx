import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import api from '../services/api';
import convertDurationToTimeString from '../utils/convertDurationToTimeString';

import HomePage from '../components/HomePage';

export interface IEpisode {
  id: string;
  title: string;
  members: string;
  publishedAt: string;
  thumbnail: string;
  description: string;
  url: string;
  duration: number;
  durationAsString: string;
}

interface IProps {
  episodes: IEpisode[];
}

export const getStaticProps: GetStaticProps = async () => {

  const response = await api.get('/episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  });

  const episodes = response.data.map( (episode) => ({
    id: episode.id,
    title: episode.title,
    members: episode.members,
    publishedAt:  format(new Date(episode.published_at), 'd MMM yy', { locale: ptBR }),
    thumbnail: episode.thumbnail,
    description: episode.description,
    url: episode.file.url,
    duration: episode.file.duration,
    durationAsString: convertDurationToTimeString(episode.file.duration),
  }));

  return {
    props: {
      episodes,
    },
    revalidate: 12 * 60 * 60, // 12 horas
  }
}

export default function Home(props: IProps) {

  return (
    <>
      <Head>
        <title>Podcastr</title>
      </Head>

      <HomePage episodes={props.episodes} />
    </>
  );
}
