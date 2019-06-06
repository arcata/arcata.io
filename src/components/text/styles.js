import styled, { css } from 'styled-components';
import { font } from 'constants/theme';

export const Container = styled.span`
    font: ${font('text')}
    line-height: 3.8rem;
    
    ${props =>
        props.small &&
        css`
            font: ${font('smallText')};
        `}
`;
