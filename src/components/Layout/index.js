import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from 'components/head';
import Header from 'components/header';
import Footer from 'components/footer';
import GlobalStyle from 'global.css.js';
import { Container } from './styles';

const Layout = ({ data, children }) => (
    <Container>
        <GlobalStyle />
        <Head />
        <Header title={data.site.siteMetadata.siteTitle} />
        {children}
        <Footer />
    </Container>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    data: PropTypes.object.isRequired,
};

const LayoutWithQuery = props => (
    <StaticQuery
        query={graphql`
            query LayoutQuery {
                site {
                    siteMetadata {
                        siteTitle
                    }
                }
            }
        `}
        render={data => <Layout data={data} {...props} />}
    />
);

LayoutWithQuery.propTypes = {
    children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;
