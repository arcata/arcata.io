import React from 'react';
import PropTypes from 'prop-types';
import Pad from 'components/pad';
import ContactForm from 'components/contact/form';
import { MainTitle } from 'components/title';
import { Container, FormWrapper } from './styles';
import Flex from 'styled-flex-component';

class Contact extends React.Component {
    render() {
        return (
            <Container>
                <Pad>
                    <Flex column full center>
                        <MainTitle color="darkBlue" small>
                            {' '}
                            Lets get in touch
                        </MainTitle>
                        <FormWrapper>
                            <ContactForm />
                        </FormWrapper>
                    </Flex>
                </Pad>
            </Container>
        );
    }
}

Contact.propTypes = {
    data: PropTypes.object,
};

export default Contact;
