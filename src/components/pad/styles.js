import styled from 'styled-components';

export const Pad = styled.div`
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: ${props =>
        props.justify ? props.justify : 'space-around'};
    align-items: center;
`;
