import styled from 'styled-components';

export const Container = styled.div`
    width: 26.5rem;
    height: 100vh;

    background: var(--purple-800);
    color: var(--white);

    padding: 3rem 4rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    header {
        display: flex;
        align-items: center;
    }

    header strong {
        margin-left: 1rem;
        font-family: Lexend, sans-serif;
        font-weight: 600;
    }

    .player-image {
        max-width: 20rem;
        height: 20rem;

        border-radius: 1.5rem;

        &.empty {
            border: 1.5px dashed var(--purple-300);
            
            background: linear-gradient(143.8deg, rgba(145, 100, 250, 0.8) 0%, rgba(0, 0, 0, 0) 100%);

            padding: 4rem;
            text-align: center;

            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .player-image img {
        width: 100%;
        height: 100%;

        object-fit: cover;

        border-radius: 1.5rem;
    }

    .player-image {
        strong, p {
            display: block;
            text-align: center;

            margin-top: 1rem;
        }

        p {
            opacity: 0.6;
        }
    }

    footer {
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &.empty {
            opacity: 0.5;
        }
    }

    footer .progress {
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 0.875rem;
    }

    footer .progress .slider {
        width: 15rem;
        height: 0.3rem;

        margin: 0 0.6rem;

        display: flex;
        align-items: center;

        cursor: pointer;
    }

    footer .progress .slider .empty-slider {
        width: 100%;
        height: 100%;
        border-radius: 2px;
        background: var(--purple-300);
    }

    footer .buttons {
        width: 15rem;

        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-top: 1rem;
    }

    footer .buttons button {
        border: 0;
        background: transparent;
        font-size: 0;

        transition: 0.2s;

        &:disabled {
            cursor: default;
        }

        &:hover:not(:disabled):not(.active) {
            filter: brightness(0.9);
        }

        &.active {
            filter: invert(0.35) sepia(1) saturate(3) hue-rotate(100deg);

            &:hover {
                filter: brightness(0.6) invert(0.35) sepia(1) saturate(3) hue-rotate(100deg);
            }
        }
    }

    footer:not(.empty) .buttons button:disabled {
        opacity: 0.5;
    }

    footer .buttons button.play-button {
        width: 4rem;
        height: 4rem;

        border-radius: 1rem;
        background: var(--purple-300);

        transition: filter 0.2s;

        &.pause {
            filter: brightness(0.9);
        }
    }

    footer .buttons .volume-container {
        position: relative;

        margin-bottom: -3px;
    }   

    footer .buttons .volume-container .volume-slider {
        position: absolute;
        left: 0;
        bottom: 2rem;

        width: 100%;
        height: 10rem;

        padding: 0.8rem 0;

        background: var(--purple-300);
        border-radius: 1rem;
        z-index: 10;

        display: flex;
        justify-content: center;

        cursor: pointer;
    }

    @media (max-width: 1771px){
        width: 100vw;
        min-height: 50rem;

        .player-image {
            height: fit-content;
            min-height: 20rem;
        }
    }
`;
