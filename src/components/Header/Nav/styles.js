import styled from 'styled-components';

export const Container = styled.nav`
    ul {
        display: flex;
        list-style: none;
        align-items: center;
        padding: 0;

        li {
            & + li {
                margin-left: 2rem;
            }
        }
    }
`;
