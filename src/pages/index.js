import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';

const Index = () => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        Stay tuned!
      </Title>
    </Box>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;