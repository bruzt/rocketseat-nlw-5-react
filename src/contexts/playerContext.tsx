import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

import { IEpisode } from '../pages';

interface IProps {
    children: React.ReactNode;
}

interface IPlayerContext {
    setEpisodes: React.Dispatch<React.SetStateAction<IEpisode[]>>;
    currentEpisode: IEpisode | null;
    playList: (index: number) => void;
    playEpisode: (episode: IEpisode) => void;
    pause: () => void;
    resume: () => void;
    isPlaying: boolean;
    playPrevious: () => void;
    playNext: () => void;
    shuffe: () => void;
    hasPrevious: boolean;
    hasNext: boolean;
    isLooping: boolean;
    toggleIsLooping: () => void;
    progress: number;
    handleSliderChange: (amount: number) => void;
    volume: number;
    handleVolumeChange: (amount: number) => void;
}

const Context = createContext({} as IPlayerContext);

let timeoutId: NodeJS.Timeout;

export function PlayerProvider({ children }: IProps) {

    const [episode, setEpisode] = useState<IEpisode | null>(null);
    const [episodes, setEpisodes] = useState<IEpisode[]>([]);
    const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(-1);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLooping, setIsLooping] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(50);

    const currentEpisode = episode || episodes[currentEpisodeIndex];
    const hasPrevious = currentEpisodeIndex > 0;
    const hasNext = currentEpisodeIndex < episodes.length - 1;

    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {

                audioRef.current.volume = volume/100;
                audioRef.current.play();
            }
            else audioRef.current.pause();
        }
    }, [isPlaying])

    function playList(index: number) {

        setEpisode(null);
        setCurrentEpisodeIndex(index);
        resume();
    }

    function playEpisode(episode: IEpisode) {

        setCurrentEpisodeIndex(-1);
        setEpisode(episode);
        resume();
    }

    function resume() {

        setIsPlaying(true);
    }

    function pause() {

        setIsPlaying(false);
    }

    function playPrevious() {

        if (hasPrevious) {

            setEpisode(null);
            setCurrentEpisodeIndex(currentEpisodeIndex - 1);
        }
    }

    function playNext() {

        if (hasNext) {

            const nextIndex = (episodes[currentEpisodeIndex + 1].id == episode?.id) ? 2 : 1;

            setEpisode(null);
            setCurrentEpisodeIndex(currentEpisodeIndex + nextIndex);
        }
    }

    function shuffe() {

        if (episodes.length > 1) {

            const randomIndex = Math.floor(Math.random() * episodes.length);

            if (randomIndex == currentEpisodeIndex) shuffe();
            else {

                setEpisode(null);
                setCurrentEpisodeIndex(randomIndex);
            }
        }
    }

    function toggleIsLooping() {
        setIsLooping(!isLooping);
    }

    function progressListener() {

        audioRef.current.currentTime = 0;

        audioRef.current.addEventListener('timeupdate', () => {
            setProgress(Math.floor(audioRef.current.currentTime));
        })
    }

    function handleSliderChange(amount: number) {

        pause();
        setProgress(amount);

        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {

            audioRef.current.currentTime = amount;
            resume();
            
        }, 100);
    }

    function handleVolumeChange(amount: number){

        setVolume(amount);
        audioRef.current.volume = amount/100;
    }

    return (
        <Context.Provider
            value={{
                setEpisodes,
                currentEpisode,
                playList,
                playEpisode,
                pause,
                resume,
                isPlaying,
                playPrevious,
                playNext,
                shuffe,
                hasPrevious,
                hasNext,
                isLooping,
                toggleIsLooping,
                progress,
                handleSliderChange,
                volume,
                handleVolumeChange,
            }}
        >
            {currentEpisode && (
                <audio
                    ref={audioRef}
                    src={currentEpisode.url}
                    autoPlay={isPlaying}
                    onPlay={resume}
                    onPause={pause}
                    loop={isLooping}
                    onLoadedMetadata={progressListener}
                />
            )}

            {children}
        </Context.Provider>
    );
}

export function usePlayerContext() {

    return useContext(Context);
}
