import React from 'react';
import { Link } from 'gatsby';
import * as S from './styles';

const Nav = () => (
    <S.Container>
        <ul>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <a href="https://github.com/fabe/gatsby-universal">GitHub</a>
            </li>
        </ul>
    </S.Container>
);

export default Nav;
