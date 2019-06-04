import React from 'react';
import { Link } from 'gatsby';
import {
    Footer,
    FooterColumnWrapper,
    Container,
    Slogan,
    Baseline,
} from './styles';
import Flex, { FlexItem } from 'styled-flex-component';
import { MainTitle, SubTitle, Title } from 'components/title';
import Button from 'components/button';
import ReactSVG from 'react-svg';

const footer = [
    {
        title: 'Company',
        links: [
            {
                alt: 'Why Arcata',
                href: '/why',
            },
            {
                alt: 'Work',
                href: '/work',
            },
            {
                alt: 'Blog',
                href: '/blog',
            },
            {
                alt: 'Team',
                href: '/team',
            },
            {
                alt: 'Culture',
                href: '/culture',
            },
            {
                alt: 'Careers',
                href: '/careers',
            },
        ],
    },
    {
        title: 'Services',
        links: [
            {
                alt: 'Product Strategy',
                href: '',
            },
            {
                alt: 'Product Design',
                href: '',
            },
            {
                alt: 'Engineering',
                href: '',
            },
            {
                alt: 'Testing and QA',
                href: '',
            },
            {
                alt: 'Project Management',
                href: '',
            },
            {
                alt: 'Training and Support',
                href: '',
            },
        ],
    },
    {
        title: 'Capabilities',
        links: [
            {
                alt: 'Progressive Web Apps',
                href: '',
            },
            {
                alt: 'Fin Tech',
                href: '',
            },
            {
                alt: 'Microservices',
                href: '',
            },
        ],
    },
    {
        title: 'Connect',
        links: [
            {
                alt: 'Contact us',
                href: '/contact',
            },
            {
                alt: 'Newsletter',
                href: '/newsletter',
            },
            {
                alt: 'Instagram',
                href: 'https://instagram.com/arcata',
            },
            {
                alt: 'LinkedIn',
                href: '',
            },
            {
                alt: 'GitHub',
                href: '',
            },
            {
                alt: 'Twitter',
                href: '',
            },
        ],
    },
];

const FooterC = () => (
    <Footer>
        <Container>
            <Slogan>
                <Flex full justifyBetween>
                    <FlexItem>
                        <MainTitle small>
                            Building Awesome Digital Products
                        </MainTitle>
                        <SubTitle>Let’s launch together</SubTitle>
                    </FlexItem>
                    <FlexItem>
                        <Button primary>Contact Us</Button>
                    </FlexItem>
                </Flex>
            </Slogan>
            <Flex full justifyBetween>
                {footer.map(item => (
                    <FooterColumn
                        key={item.title}
                        title={item.title}
                        links={item.links}
                    />
                ))}
            </Flex>
            <Baseline>
                <Flex full justifyBetween>
                    <FlexItem>
                        <ReactSVG src="./twitter.svg" className="social-icon" wrapper="span" />
                        <ReactSVG
                            src="./telegram.svg"
                            className="social-icon"
                            wrapper="span"
                        />
                        <ReactSVG src="./github.svg" className="social-icon" wrapper="span" />
                        <ReactSVG
                            src="./instagram.svg"
                            className="social-icon"
                            wrapper="span"
                        />
                        <ReactSVG
                            src="./linkedin.svg"
                            className="social-icon"
                            wrapper="span"
                        />
                    </FlexItem>
                    <FlexItem>
                        <Flex column alignEnd>
                            <FlexItem>
                                <p>
                                    Copyright © 2019 Arcata, Ltd. All rights
                                    reserved.
                                </p>
                            </FlexItem>
                            <FlexItem>
                                Terms of Service and Privacy Policy.
                            </FlexItem>
                        </Flex>
                    </FlexItem>
                </Flex>
            </Baseline>
        </Container>
    </Footer>
);

const FooterColumn = ({ title, links }) => (
    <FooterColumnWrapper>
        <Title>{title}</Title>
        <ul>
            {links.map(link => (
                <li key="link.alt">
                    <Link to={link.href}>{link.alt}</Link>
                </li>
            ))}
        </ul>
    </FooterColumnWrapper>
);

export default FooterC;