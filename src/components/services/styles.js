import styled from 'styled-components';
import { color } from 'constants/theme';
import media from 'styled-media-query';

export const Container = styled.div`
    background-color: ${color('white')};
`;

export const Service = styled.div`
    max-width: 350px;
    margin-bottom: 30px;
    margin-right: 30px;
`;

export const Services = styled.div`
    padding: 10px;
`;

export const GeneralServicesInfo = styled.div`
    max-width: 550px;

    ${media.lessThan('medium')`
        display: none;
    `}
`;

export const ServiceDescription = styled.div`
    margin-top: 10px;
    color: ${color('grey')};
`;

export const Illustration = styled.div`
    background-image: url(./hero_of_employe.svg);
    background-size: contain;
    background-repeat: no-repeat;
    width: 450px;
    height: 500px;
    margin-top: 50px;
`;
