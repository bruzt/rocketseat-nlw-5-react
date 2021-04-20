import React from 'react';

interface IProps {
  episodes: Array<{
    id: string;
    title: string;
  }>;
}

export async function getStaticProps(){

  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 12 * 60 * 60 // 12 horas
  }
}

export default function Home(props: IProps) {
  
  return (
    <ul>
      {props.episodes.map( (episode) => (
        <li key={episode.id}>{episode.title}</li>
      ))}
    </ul>
  );
}
