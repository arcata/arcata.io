import styled from 'styled-components';
import { color } from 'constants/theme';

export const Container = styled.header`
    padding: 2rem;
    background-color: ${color('primary')};

    a {
        font-size: 1.5rem;
        text-decoration: none;
        font-weight: 500;
    }
`;
