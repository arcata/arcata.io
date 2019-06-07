import React from 'react';
import PropTypes from 'prop-types';
import FormWrapper from './styles';

export default function Form(props) {
    return <FormWrapper {...props}>{props.children}</FormWrapper>;
}
