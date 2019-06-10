import styled, { css } from 'styled-components';
import { color, font } from 'constants/theme';

export default styled.textarea`
    border: 2px solid ${color('white')};
    border-radius: 5px;
    outline: none;
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 10px;
    font: ${font('microText')};
    width: 100%;
    min-height: 200px;
    resize: vertical;
    box-sizing: border-box;
    font-weight: 600;
    color: ${color('darkBlue')};

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
