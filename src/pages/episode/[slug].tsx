import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import api from '../../services/api';
import convertDurationToTimeString from '../../utils/convertDurationToTimeString';

import { IEpisode } from '..';
import EpisodePage from '../../components/EpisodePage';

interface IProps {
    episode: IEpisode
}

export const getStaticPaths: GetStaticPaths  = async () => {

    const response = await api.get('/episodes', {
        params: {
            _limit: 2,
            _sort: 'published_at',
            _order: 'desc'
        }        
    });

    const paths = response.data.map( (episode) => ({
            params: {
                slug: episode.id
            }
        }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const response = await api.get('/episodes', {
        params: {
            id: params.slug
        }
    });

    const episode = {
      id: response.data[0].id,
      title: response.data[0].title,
      members: response.data[0].members,
      publishedAt:  format(new Date(response.data[0].published_at), 'd MMM yy', { locale: ptBR }),
      thumbnail: response.data[0].thumbnail,
      description: response.data[0].description,
      url: response.data[0].file.url,
      duration: response.data[0].file.duration,
      durationAsString: convertDurationToTimeString(response.data[0].file.duration),
    };
  
    return {
      props: {
        episode,
      },
      revalidate: 24 * 60 * 60, // 24 horas
    }
  }

export default function Episode({ episode }: IProps){

    return <EpisodePage episode={episode} />;
}