import styled from 'styled-components';

export const Flexbox = styled.div`
    display: flex;
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items: ${({ alignItems }) => alignItems};
    flex-direction: ${({ flexDirection }) => flexDirection};
`;
