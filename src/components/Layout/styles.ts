import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;

    main {
        flex: 1;
    }

    @media (max-width: 1771px){
        flex-direction: column;
        align-items: center;
    }
`;
