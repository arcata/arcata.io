import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Intro from 'components/intro';
const Index = () => (
    <Layout>
        <Intro />
    </Layout>
);

Index.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Index;
