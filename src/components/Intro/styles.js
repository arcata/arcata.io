import styled from 'styled-components';
import { color } from 'constants/theme';
import media from 'styled-media-query';

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
        margin: -4px -1px;
    }
`;

export const WelcomeContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const WelcomeTitle = styled.div`
    max-width: 600px;
    margin-bottom: 20px;
`;

export const WelcomeWording = styled.div`
    margin-top: 40px;
    margin-bottom: 40px;
    max-width: 500px;
`;

export const WelcomeIllustration = styled.div`
    background-image: url(./super_man.svg);
    background-size: contain;
    background-repeat: no-repeat;
    width: 650px;
    height: 800px;

    ${media.lessThan('medium')`
        display: none;
    `}
`;
