import styled from 'styled-components';
import { color, font } from 'constants/theme';

export const Footer = styled.footer`
    background: ${color('darkBlue')};
    height: 500px;
    width: 100%;
`;

export const FooterColumnWrapper = styled.div`
    margin: 50px;
    
    ul {
        margin-top: 30px;

        li {
            color: ${color('white')};
            font: ${font('text')}
            margin-top: 10px;
        }
    }
`;
