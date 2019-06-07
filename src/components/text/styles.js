import styled, { css } from 'styled-components';
import { font } from 'constants/theme';

export const Container = styled.span`
    ${props =>
        props.regular &&
        css`
            font: ${font('text')};
            line-height: 2.8rem;
        `}

    ${props =>
        props.small &&
        css`
            font: ${font('smallText')};
            line-height: 2rem;
        `}

    ${props =>
        props.micro &&
        css`
            font: ${font('microText')};
            line-height: 1.8rem;
        `}

    ${props =>
        props.grey &&
        css`
            color: ${font('grey')};
        `}
`;
