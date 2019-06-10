import React from 'react';
import { Link } from 'gatsby';
import * as S from './styles';
import Button from 'components/button';

const Nav = () => (
    <S.Container>
        <ul>
            <li>
                <Link to="/about">Who we are</Link>
            </li>
            <li>
                <Link to="/about">Work</Link>
            </li>
            <li>
                <Link to="/services">Services</Link>
            </li>
            <li>
                <Link to="/team">Team</Link>
            </li>
            <li>
                <Link to="/careers">Careers</Link>
            </li>
            <li>
                <Link to="/blog">Engineering Blog</Link>
            </li>
            <li>
                <Button>Contact Us</Button>
            </li>
        </ul>
    </S.Container>
);

export default Nav;
