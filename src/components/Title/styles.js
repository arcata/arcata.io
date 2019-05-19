import styled from 'styled-components';
import { font, color } from 'constants/theme';

export const h1 = styled.h1`
    font: ${font('pageHeading')};
    margin-bottom: 70px;
    color: ${color('font')};

    &::after {
        content: ${({ subtitle }) => subtitle && `'${subtitle}'`};
        display: block;
        color: ${color('grey')};
        font: ${font('text')};
        margin-top: 1rem;
    }
`;
