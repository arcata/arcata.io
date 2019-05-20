import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
import Nav from 'components/header/nav';
import Logo from 'components/header/logo';
import * as S from './styles';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
    enter: {
        y: 0,
        transition: {
            ease: 'easeInOut',
        },
    },
    exit: {
        y: '-100%',
        transition: {
            ease: 'easeInOut',
        },
    },
});

const Header = () => (
    <AnimatedContainer>
        <S.Container>
            <Link to="/">
                <Logo />
            </Link>

            <Nav />
        </S.Container>
    </AnimatedContainer>
);

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;
