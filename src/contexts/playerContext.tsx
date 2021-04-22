import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

import { IEpisode } from '../pages';

interface IProps {
    children: React.ReactNode;
}

interface IPlayerContext {
    currentEpisode: IEpisode | null;
    play: (episode: IEpisode) => void;
    pause: () => void;
    resume: () => void;
    isPlaying: boolean;
    playPrevious: () => void;
    playNext: () => void;
    shuffe: () => void;
}

const Context = createContext({});

export function PlayerProvider({ children }: IProps) {

    const [episodes, setEpisodes] = useState<IEpisode[]>([]);
    const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(-1);
    const [isPlaying, setIsPlaying] = useState(false);

    const currentEpisode = episodes[currentEpisodeIndex];

    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect( () => {
        if(audioRef.current){
            if(isPlaying) audioRef.current.play();
            else audioRef.current.pause();
        }
    }, [isPlaying])

    function play(episode: IEpisode) {

        setEpisodes([...episodes, episode]);
        setCurrentEpisodeIndex(currentEpisodeIndex + 1);
        resume();
    }

    function resume() {

        setIsPlaying(true);
    }

    function pause() {

        setIsPlaying(false);
    }

    function playPrevious() {

        if (currentEpisodeIndex > 0) {

            pause();
            setCurrentEpisodeIndex(currentEpisodeIndex - 1);
        }
    }

    function playNext() {

        if (episodes.length > 0 && currentEpisodeIndex != episodes.length - 1) {

            pause();
            setCurrentEpisodeIndex(currentEpisodeIndex + 1);
        }
    }

    function shuffe() {

        if (episodes.length > 1) {

            const randomIndex = Math.floor(Math.random() * episodes.length);

            if (randomIndex == currentEpisodeIndex) shuffe();
            else {

                pause();
                setCurrentEpisodeIndex(randomIndex);
            }
        }
    }

    return (
        <Context.Provider
            value={{
                currentEpisode,
                play,
                pause,
                resume,
                isPlaying,
                playPrevious,
                playNext,
                shuffe,
            }}
        >
            {currentEpisode && (
                <audio
                    ref={audioRef}
                    src={currentEpisode.url}
                    autoPlay={isPlaying}
                    onPlay={resume}
                    onPause={pause}
                />
            )}

            {children}
        </Context.Provider>
    );
}

export function usePlayerContext() {

    const playerContext = useContext(Context) as IPlayerContext;

    return playerContext;
}
