import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 70rem;
    position: relative;
    z-index: 1;
    background-color: #0f015e;
    background-image: radial-gradient(at 50% 100%, #7b16ff, #0f015e);
    overflow: hidden;

    .particles {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        left: 0;
        z-index: -1;
    }

    .wave {
        position: absolute;
        left: 0px;
        width: 100%;
        bottom: 0px;
        margin: -2px -1px;
    }
`;

export const Welcome = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20rem;
    max-width: 70rem;
    z-index: 1;
`;

export const WelcomeIllustration = styled.div`
    background-image: url(./under_constructions.svg);
    background-size: contain;
    background-repeat: no-repeat;
    width: 1100px;
    height: 800px;
    position: absolute;
    top: -10px;
    bottom: 0px;
    left: calc(45vw + 100px);
`;
