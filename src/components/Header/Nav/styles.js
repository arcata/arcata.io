import styled from 'styled-components';
import media from 'styled-media-query';

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

    ${media.lessThan('medium')`
        display: none; // TODO: display hamburger instead of hiding it completely
    `}
`;
