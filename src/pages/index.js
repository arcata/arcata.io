import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Intro from 'components/intro';
import Services from 'components/services';
import Stack from 'components/stack';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
    <Layout>
        <Intro />
        <Services />
        <Stack data={data.stack} />
    </Layout>
);

Index.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
    query {
        stack: file(relativePath: { eq: "images/stack.png" }) {
            childImageSharp {
                fluid(maxHeight: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
