import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 6.25rem;

    display: flex;
    align-items: center;

    padding: 2rem 4rem;

    background: var(--white);
    border: 1px solid var(--gray-100);

    figure {
        margin: 2rem;
    }

    .header-date {
        width: 100%;

        display: flex;

        border-left: 1px solid var(--gray-100);

        padding: 1rem 0 1rem 2rem;
    }

    .header-date span {
        margin-left: auto;
        text-transform: capitalize;
    }
`;
