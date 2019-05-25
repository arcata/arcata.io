import styled from 'styled-components';
import { font, color } from 'constants/theme';

export const MainTitle = styled.h1`
    font: ${font('pageHeading')};
    color: ${props => (props.color ? color(props.color) : color('white'))};
`;

export const SubTitle = styled.h2`
    font: ${font('subtitle')};
    color: ${props => (props.color ? color(props.color) : color('white'))};
`;

export const Title = styled.h2`
    font: ${font('title')};
    color: ${props => (props.color ? color(props.color) : color('white'))};
`;
