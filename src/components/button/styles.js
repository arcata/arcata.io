import styled from 'styled-components';
import { color } from 'constants/theme';

export default styled.button`
    display: block;
    cursor: pointer;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    color: #fff;
    background-color: ${color('red')};
    font-size: 13px;
    border-color: ${color('red')};
    border-radius: 4px;
`;
