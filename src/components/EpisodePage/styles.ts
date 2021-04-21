import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 6.5rem);

    padding: 3rem 0;

    display: flex;
    justify-content: center;

    overflow-y: scroll;
    
    section {
        max-width: 40rem;;
        height: fit-content;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    figure {
        position: relative;
    }

    figure img {
        width: 41rem;

        border-radius: 1rem;
    }

    figure button {
        width: 3rem;
        height: 3rem;

        font-size: 0;

        border: 0;
        border-radius: 0.5rem;

        &:hover {
            filter: brightness(0.9);
        }
    }

    figure button.back {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-50%, -50%);

        background: var(--purple-500);

        & img {
            width: 60%;
            height: 60%;
        }
    }

    figure button.play {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(50%, -50%);

        background: var(--green-500);

        & img {
            width: 100%;
            height: 100%;
        }
    }

    h1 {
        margin-top: 3rem;
        text-align: center;
    }

    .info {
        padding: 3rem 0;

        border-bottom: 1px solid var(--gray-100);
        margin-bottom: 3rem;
    }

    .description {
        text-align: justify;
        line-height: 1.5rem;
    }
`;
