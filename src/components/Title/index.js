import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Title = ({ children, as = 'span', size }) => {
  return (
    <S.h1 as={as} size={size}>
      {children}
    </S.h1> 
  );
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.string,
  size: PropTypes.oneOf(['large']),
};

export default Title;
