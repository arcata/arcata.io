import styled from 'styled-components';
import { font, color } from 'constants/theme';

export const MainTitle = styled.h1`
    font: ${font('pageHeading')};
    color: ${color('white')};
    margin: 15px;
`;

export const SubTitle = styled.h2`
    font: ${font('listingTitle')};
    color: ${color('white')};
    margin: 10px;
`;
