import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const Text = ({ children }) => <Container>{children}</Container>;

Text.propTypes = {
    children: PropTypes.string,
};

export default Text;
