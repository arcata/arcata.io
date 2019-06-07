import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const Text = props => <Container {...props}>{props.children}</Container>;

Text.propTypes = {
    children: PropTypes.string,
};

export default Text;
