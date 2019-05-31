import styled, { css } from 'styled-components';
import { color, font } from 'constants/theme';

export default styled.button`
    display: block;
    cursor: pointer;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    color: #fff;
    background-color: ${color('red')};
    border-color: ${color('red')};
    border-radius: 4px;
    font: 500 13px asap,sans-serif;

    ${props => props.primary && css`
        font: 600 17px asap,sans-serif;
        font-weight: bold;
        padding-bottom: 10px;
        padding-top: 10px;
        padding-left: 20px;
        padding-right: 20px;
        border-radius: 6px;
  `}
`;
