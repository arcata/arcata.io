import React from 'react';
import PropTypes from 'prop-types';
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
import { footer } from 'components/footer/constants';

const FooterColumn = ({ title, links }) => (
    <FooterColumnWrapper>
        <Title>{title}</Title>
        <ul>
            {links.map(link => (
                <li key={link.alt}>
                    <a href={link.href}>{link.alt}</a>
                </li>
            ))}
        </ul>
    </FooterColumnWrapper>
);

FooterColumn.propTypes = {
    title: PropTypes.string,
    links: PropTypes.array,
};

const FooterC = () => (
    <Footer>
        <Container>
            <Slogan>
                <Flex full justifyBetween wrap>
                    <FlexItem>
                        <MainTitle small>
                            Building Awesome Digital Products
                        </MainTitle>
                        <SubTitle>Let’s launch together</SubTitle>
                    </FlexItem>
                    <FlexItem>
                        <a href="mailto:hello@arcata.io">
                            <Button primary>Contact Us</Button>
                        </a>
                    </FlexItem>
                </Flex>
            </Slogan>
            <Flex full justifyBetween wrap>
                {footer.map(item => (
                    <FooterColumn
                        key={item.title}
                        title={item.title}
                        links={item.links}
                    />
                ))}
            </Flex>
            <Baseline>
                <Flex full justifyBetween wrap>
                    <FlexItem>
                        <a href="https://twitter.com/arcataio">
                            <ReactSVG
                                src="./twitter.svg"
                                className="social-icon"
                                wrapper="span"
                            />
                        </a>
                        <a href="https://github.com/arcata">
                            <ReactSVG
                                src="./github.svg"
                                className="social-icon"
                                wrapper="span"
                            />
                        </a>
                        <a href="https://instagram.com/arcataio">
                            <ReactSVG
                                src="./instagram.svg"
                                className="social-icon"
                                wrapper="span"
                            />
                        </a>
                        <a href="https://linkedin.com/company/arcataio">
                            <ReactSVG
                                src="./linkedin.svg"
                                className="social-icon"
                                wrapper="span"
                            />
                        </a>
                    </FlexItem>
                    <Flex column alignEnd wrap>
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
                </Flex>
            </Baseline>
        </Container>
    </Footer>
);

export default FooterC;
