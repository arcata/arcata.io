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
    width: 100%;
    max-width: 380px;

    :hover {
        border: 2px solid ${color('black')};
    }

    :focus {
        border: 2px solid ${color('primary')};
    }
`;
