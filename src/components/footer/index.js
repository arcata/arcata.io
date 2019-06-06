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
                <li key="link.alt">
                    <Link to={link.href}>{link.alt}</Link>
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
                        <ReactSVG
                            src="./twitter.svg"
                            className="social-icon"
                            wrapper="span"
                        />
                        <ReactSVG
                            src="./telegram.svg"
                            className="social-icon"
                            wrapper="span"
                        />
                        <ReactSVG
                            src="./github.svg"
                            className="social-icon"
                            wrapper="span"
                        />
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

export default FooterC;
