import styled from 'styled-components';
import { color } from 'constants/theme';

export const Container = styled.header`
    padding: 2rem;
    background-color: ${color('primary')};

    a {
        font-size: 1.5rem;
        transition: color 0.2s ease;
        text-decoration: none;
        font-weight: 500;
        color: #ffffff;
    }
`;
