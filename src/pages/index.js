import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Intro from 'components/intro';
import Services from 'components/services';

const Index = () => (
    <Layout>
        <Intro />
        <Services />
    </Layout>
);

Index.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Index;
