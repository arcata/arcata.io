import styled, { css } from 'styled-components';
import { color, font } from 'constants/theme';

export default styled.input`
    min-height: 30px;
    border: 2px solid ${color('white')};
    border-radius: 5px;
    outline: none;
    margin-top: 15px;
    padding: 5px;
    font: ${font('microText')};
    font-weight: 600;
    color: ${color('darkBlue')};
    width: 100%;
    max-width: 380px;

    transition-property: border;
    transition-duration: 0.5s;
    transition-timing-function: linear;

    :hover {
        border: 2px solid ${color('black')};
    }

    :focus {
        border: 2px solid ${color('primary')};
    }
`;
