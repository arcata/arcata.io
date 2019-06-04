import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Nav from 'components/header/nav';
import Logo from 'components/header/logo';
import Pad from 'components/pad';
import { Container } from './styles';

const Header = () => (
    <Container>
        <Pad justify="space-between">
            <Link to="/">
                <Logo />
            </Link>

            <Nav />
        </Pad>
    </Container>
);

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;
