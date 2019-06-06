import styled from 'styled-components';
import { color, font } from 'constants/theme';

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    padding-top: 80px;
    padding-bottom: 40px;
    background: ${color('darkBlue')};
`;

export const Container = styled.div`
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
`;

export const Slogan = styled.div`
    margin-bottom: 140px;
`;

export const FooterColumnWrapper = styled.div`
    ul {
        margin-top: 30px;

        li {
            a {
                color: ${color('white')};
                font: ${font('smallText')};
                text-decoration: none;
            }
        }
    }
`;

export const Baseline = styled.div`
    margin-top: 40px;

    .social-icon {
        width: 24px;
        height: 24px;
        margin: 5px;
        fill: #fff;
        display: inline-block;
    }
`;
