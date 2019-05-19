import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 40rem;
    position: relative;
    z-index: 1;
    background-color: rgb(15, 1, 94);
    background-image: radial-gradient(at 50% 100%, rgba(123, 22, 255, 0.75), rgb(15, 1, 94));

    .particles {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: -1;
    }
`;

export const Welcome = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-left: 20rem;
    max-width: 70rem;
`;
