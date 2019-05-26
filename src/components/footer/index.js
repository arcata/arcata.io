import React from 'react';
import { Link } from 'gatsby';
import { Footer, FooterColumnWrapper, Container, Slogan } from './styles';
import Flex, { FlexItem } from 'styled-flex-component';
import { Title, MainTitle, SubTitle } from 'components/title';
import Button from 'components/button';

const footer = [
    {
        title: 'Company',
        links: [
            {
                alt: 'Why Arcata',
                href: '',
            },
            {
                alt: 'Work',
                href: '',
            },
            {
                alt: 'Blog',
                href: '',
            },
            {
                alt: 'Team',
                href: '',
            },
            {
                alt: 'Culture',
                href: '',
            },
            {
                alt: 'Careers',
                href: '',
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
                href: '',
            },
            {
                alt: 'Newsletter',
                href: '',
            },
            {
                alt: 'Instagram',
                href: '',
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
                        <SubTitle>
                            TAKE YOUR PRODUCT TO THE NEXT LEVEL
                        </SubTitle>
                        <SubTitle>Let’s build together.</SubTitle>
                    </FlexItem>
                    <FlexItem>
                        <Button>Contact Us</Button>
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
