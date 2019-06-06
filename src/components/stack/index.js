import React from 'react';
import PropTypes from 'prop-types';
import Pad from 'components/pad';
import { MainTitle } from 'components/title';
import { Container, StackImage } from './styles';
import Flex from 'styled-flex-component';
import Img from 'gatsby-image';

const Stack = ({ data }) => (
    <Container>
        <Pad>
            <Flex column full center>
                <MainTitle color="darkBlue" small>
                    {' '}
                    Our next generation technology stack
                </MainTitle>
                <StackImage>
                    <Img
                        fluid={data.childImageSharp.fluid}
                        alt="Technology Stack"
                    />
                </StackImage>
            </Flex>
        </Pad>
    </Container>
);

Stack.propTypes = {
    data: PropTypes.object,
};

export default Stack;
