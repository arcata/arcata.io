import styled from 'styled-components';
import { color } from 'constants/theme';

export const Container = styled.div`
    min-height: 1000px;
    position: relative;
    background-color: ${color('primary')};
    overflow: hidden;
    padding-top: 50px;

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
    max-width: 80rem;
`;

export const WelcomeIllustration = styled.div`
    background-image: url(./super_man.svg);
    background-size: contain;
    background-repeat: no-repeat;
    width: 650px;
    height: 800px;
`;
