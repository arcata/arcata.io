import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 2;

    a {
        font-size: 1.5rem;
        transition: color 0.2s ease;
        text-decoration: none;
        font-weight: 500;
        color: #ffffff;
    }
`;
