import styled from 'styled-components';

export const Container = styled.div`
    width: 26.5rem;
    height: 100%;
    min-height: 100vh;

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

    .empty-player {
        width: 100%;
        height: 20rem;

        border: 1.5px dashed var(--purple-300);
        border-radius: 1.5rem;

        background: linear-gradient(143.8deg, rgba(145, 100, 250, 0.8) 0%, rgba(0, 0, 0, 0) 100%);

        padding: 4rem;
        text-align: center;

        display: flex;
        align-items: center;
        justify-content: center;
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

        margin: 0 0.5rem;
        background: var(--purple-300);

        border-radius: 2px;
    }

    footer .progress .slider div {
        width: 0;
        height: 100%;
        background: var(--white);
        border-radius: 2px;
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
    }

    footer .buttons button.play-button {
        width: 4rem;
        height: 4rem;

        border-radius: 1rem;
        background: var(--purple-300);
    }
`;