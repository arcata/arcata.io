import React from 'react';
import { Footer, FooterColumnWrapper } from './styles';
import Flex, { FlexItem } from 'styled-flex-component';
import { Title } from 'components/title';

const footer = [
    {
        title: 'Company',
        links: [{
            alt: 'Why Arcata',
            href: '',
        }, {
            alt: 'Work',
            href: '',
        }, {
            alt: 'Blog',
            href: '',
        }, {
            alt: 'Team',
            href: '',
        }, {
            alt: 'Culture',
            href: '',
        }, {
            alt: 'Careers',
            href: '',
        }]
    },
    {
        title: 'Services',
        links: [{
            alt: 'Product Strategy',
            href: '',
        }, {
            alt: 'Product Design',
            href: '',
        }, {
            alt: 'Engineering',
            href: '',
        }, {
            alt: 'Testing and QA',
            href: '',
        }, {
            alt: 'Project Management',
            href: '',
        }, {
            alt: 'Training and Support',
            href: '',
        }]
    },
    {
        title: 'Capabilities',
        links: [{
            alt: 'Progressive Web Apps',
            href: '',
        }, {
            alt: 'Fin Tech',
            href: '',
        }, {
            alt: 'Microservices',
            href: '',
        }]
    },
];

const FooterC = () => (
    <Footer>
        <Flex full alignEnd justifyCenter>
            {footer.map(item => <FlexItem key="item.title"><FooterColumn title={item.title} links={item.links} /></FlexItem>)}
        </Flex>
    </Footer>
);

const FooterColumn = ({title, links}) => (
    <FooterColumnWrapper>
        <Title>{title}</Title>
        <ul>
            {links.map(link => <li key="link.alt"><a href="{link.href}">{link.alt}</a></li>)}
        </ul>
    </FooterColumnWrapper>
)

export default FooterC;
