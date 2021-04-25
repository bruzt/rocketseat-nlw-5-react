import styled from 'styled-components';

export const EpisodeCardContainer = styled.div`
        
    display: flex;

    background: var(--white);
    border-radius: 1rem;
    padding: 1rem;

    .episode-thumbnail {
        width: 6rem;
        height: 6rem;

        flex-shrink: 0;
    }

    .episode-thumbnail img {
        width: 6rem;
        height: 6rem;

        object-fit: cover;

        border-radius: 1rem;
    }

    .info {
        width: 100%;
        
        margin-left: 1rem;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .info a {
        font-family: Lexend;
        font-weight: 600;
        text-decoration: none;
        color: inherit;

        line-height: 1.3em;
        height: 2.6rem;
        overflow: hidden;
        text-overflow: ellipsis;

        &:hover {
            text-decoration: underline;
        }
    }

    footer {
        width: 100%;

        position: relative;
    }

    footer p {
        width: 90%;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    footer button {
        width: 2.5rem;
        height: 2.5rem;

        position: absolute;
        bottom: 0;
        right: 0;

        background: transparent;
        border: 1px solid var(--gray-100);
        border-radius: 0.675rem;

        font-size: 0;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }

    footer button img {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 550px){

        footer p:nth-child(1) {
            display: none;
        }
    }
`; 

export const Container = styled.div`
    width: 1fr;
    
    height: calc(100vh - 6.25rem);

    overflow-y: scroll;

    
    padding: 4rem;

    .center {
        max-width: 90rem;
        margin: 0 auto;
    }

    .last-releases {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 8.5rem;
        gap: 1.5rem;

        margin-top: 2rem;
    }

    h2.all-episodes {
        margin-top: 3rem;
    }

    table {
        width: 100%;

        margin-top: 2rem;
        padding-bottom: 2rem;


        th, td {
            padding: 0.75rem 1rem;
            border-bottom: 1px solid var(--gray-100);
        }

        th {
            color: var(--gray-200);
            text-transform: uppercase;
            font: 500 0.75rem Lexend, sans-serif;
            text-align: left;
        }

        td {
            font-size: 0.875rem;
        }

        td img {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 0.5rem;

            object-fit: cover;
        }

        a {
            color: var(--gray-800);

            font-family: Lexend, sans-serif;
            font-weight: 600;
            font-size: 1rem;

            text-decoration: none;
            line-height: 1.4rem;

            &:hover {
                text-decoration: underline;
            }
        }

        button {
            width: 2rem;
            height: 2rem;

            background: transparent;
            border: 1px solid var(--gray-100);
            border-radius: 0.675rem;

            font-size: 0;

            transition: filter 0.2s;

            &:hover {
                filter: brightness(0.9);
            }
        }

        button img {
            width: 100%;
            height: 100%;
        }
    }

    @media (max-width: 1771px){
        height: fit-content;

        overflow-y: unset;

        padding: 1rem 0.5rem;
    }

    @media (max-width: 1220px){
        .last-releases {
            grid-template-columns: 1fr;
        }

        table {
            th:nth-child(1),
            th:nth-child(3),
            th:nth-child(5),
            td:nth-child(1),
            td:nth-child(3),
            td:nth-child(5) {
                display: none;
            }
        }
    }
`;
